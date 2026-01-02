import { ATTENDANCE_STATUS, RULE } from '../constants.js';

export default class AttendanceManager {
  constructor() {
    this.attendanceRecords = attendanceRecords;
  }

  // 주어진 날짜를 바탕으로 출석/지각/결석 값 반환
  static getAttendanceStatus(date) {
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
}
