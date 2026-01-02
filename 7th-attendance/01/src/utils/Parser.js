import * as fs from 'fs';
import path from 'path';
import AttendanceManager from '../model/AttendanceManager.js';
import { ATTENDANCE_STATUS, RULE } from '../constants.js';

export class CSVParser {
  static parseToArr(csvPath) {
    const arr = fs
      .readFileSync(csvPath)
      .toString() // convert Buffer to string
      .split('\n') // split string to lines
      .map((e) => e.trim()) // remove white spaces for each line
      .map((e) => e.split(',').map((e) => e.trim())); // split each line to array

    arr.shift();
    arr.pop();

    return arr;
  }

  static readCSV() {
    const __dirname = path.resolve();
    const csvPath = path.join(__dirname, '.', 'public', 'attendances.csv');
    return csvPath;
  }

  static getAttendanceRecord() {
    const path = CSVParser.readCSV();
    const result = CSVParser.parseToArr(path);

    return result;
  }
}

export class DataParser {
  constructor(attendanceRecords) {
    this.attendanceRecords = attendanceRecords;
  }

  // 주어진 날짜를 바탕으로 출석/지각/결석 값 반환
  getAttendanceStatus(date) {
    const day = new Date(date);
    const dayOfWeek = day.getDay(); // 요일
    const timeStamp = date.slice(-5); // 시간 e.g. 13:02
    const [hour, min] = timeStamp.split(':');

    if (dayOfWeek === 1) {
      /**
       * 월요일
       */
      // 결석
      if (Number(hour) > 13 || Number(min) > RULE.ABSENCE_MIN)
        return ATTENDANCE_STATUS.ABSENCE;
      // 지각
      else if (Number(hour) === 13 && Number(min) > RULE.LATE_MIN)
        return ATTENDANCE_STATUS.LATE;

      return ATTENDANCE_STATUS.ATTENDANCE;
    } else if ([2, 3, 4, 5].includes(dayOfWeek)) {
      /**
       * 화-금요일
       */
      if (Number(hour) > 10 || Number(min) > RULE.ABSENCE_MIN)
        return ATTENDANCE_STATUS.ABSENCE; // 결석
      else if (Number(hour) === 10 && Number(min) > RULE.LATE_MIN)
        return ATTENDANCE_STATUS.LATE; // 지각

      return ATTENDANCE_STATUS.ATTENDANCE;
    }
  }

  // 기존의 출석 기록의 출석 상태 파악하고 플래그 추가
  // e.g. [ '짱수', '2024-12-03 10:00', '(출석)' ]
  determineAttendanceStatus() {
    // TODO 출석 기록이 없는 경우 결석으로 간주
    this.attendanceRecords.forEach((record) => {
      const date = record[1];
      const attendanceStatus = this.getAttendanceStatus(date);
      record.push(`(${attendanceStatus})`);
    });
  }
}
