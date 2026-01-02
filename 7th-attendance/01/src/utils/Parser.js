import * as fs from 'fs';
import path from 'path';
import AttendanceManager from '../model/AttendanceManager.js';

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
  // 기존의 출석 기록의 출석 상태 파악하고 플래그 추가
  // e.g. [ '짱수', '2024-12-03 10:00', '(출석)' ]
  static determineAttendanceStatus(records) {
    // TODO 출석 기록이 없는 경우 결석으로 간주
    records.forEach((record) => {
      const date = record[1];
      const attendanceStatus = AttendanceManager.getAttendanceStatus(date);
      record.push(`(${attendanceStatus})`);
    });

    console.log(records);
  }
}
