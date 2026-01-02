import { Console } from '@woowacourse/mission-utils';
import { ATTENDANCE_MODE } from '../constants.js';
import { DataParser } from '../utils/Parser.js';

export default class AttendanceManager {
  constructor(attendanceRecords) {
    this.attendanceRecords = attendanceRecords;
    this.manageFunc = {
      [ATTENDANCE_MODE['1']]: (...rest) => this.checkAttendance(...rest),
    };
  }

  checkAttendance({ nickname, time }) {
    // 12-13일 기준으로 필터
    const filteredRecords = this.attendanceRecords.filter(
      (record) => record[1].slice(8, 10) === '13'
    );
    const date = `2024-12-13 ` + time;

    if (!filteredRecords.some((record) => record === nickname)) {
      // 출석 상태(출석/지각/결석) 결정
      const parser = new DataParser(this.attendanceRecords);
      const attendanceStatus = parser.getAttendanceStatus(date);

      this.attendanceRecords.unshift([nickname, date, `(${attendanceStatus})`]);
      Console.print(`\n12월 13일 금요일 ${time} (${attendanceStatus})`);
    }
  }

  run(mode, ...rest) {
    const func = this.manageFunc[mode];
    if (func) func.call(this, ...rest);
  }
}
