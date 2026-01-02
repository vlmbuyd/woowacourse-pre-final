import { ERROR_MSG } from '../constants.js';

export default class Validator {
  static validateSelectionPrompt(mode) {
    if (!['1', '2', '3', '4', 'q'].includes(mode)) {
      throw new Error(`${ERROR_MSG.PREFIX} 잘못된 값을 입력하였습니다.`);
    }
  }

  // 등록되지 않은 닉네임
  static validateInvalidNickname(nickname, attendanceRecords) {
    if (!attendanceRecords.some((record) => record[0] === nickname)) {
      throw new Error(`${ERROR_MSG.PREFIX} 등록되지 않은 닉네임입니다.`);
    }
  }

  // 시간 형식
  static validateAttendanceCheck(time) {
    const [hour, min] = time.split(':');

    if (
      !(Number(hour) >= 0 && Number(hour) <= 24) ||
      !(Number(min) >= 0 && Number(min) <= 60)
    )
      throw new Error(`${ERROR_MSG.PREFIX} 잘못된 형식을 입력하였습니다.`);
  }
}
