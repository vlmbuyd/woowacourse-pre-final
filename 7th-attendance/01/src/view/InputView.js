import { Console } from '@woowacourse/mission-utils';
import { ATTENDANCE_MODE, INPUT_MSG, VALIDATION_KEY } from '../constants.js';
import Validator from '../utils/Validator.js';

const inputs = {
  [ATTENDANCE_MODE['1']]: (...rest) => InputView.checkAttendance(...rest),
  [ATTENDANCE_MODE['2']]: (...rest) => InputView.editAttendance(...rest),
  [ATTENDANCE_MODE['3']]: (...rest) =>
    InputView.checkCrewAttendanceHistory(...rest),
};

export default class InputView {
  static async readInput(key, ...rest) {
    const input = inputs[key];
    if (input) return await input(...rest);
  }

  static async selectFunc() {
    const mode = await Console.readLineAsync(INPUT_MSG.SELECT);
    Validator.validateSelectionPrompt(mode);

    return mode;
  }

  static async checkAttendance(attendanceRecords) {
    const nickname = await Console.readLineAsync('\n닉네임을 입력해 주세요.\n');
    Validator.validateInvalidNickname(nickname, attendanceRecords);

    const time = await Console.readLineAsync('\n등교 시간을 입력해 주세요.\n');
    Validator.validateAttendanceCheck(time);

    return { nickname, time };
  }

  static async editAttendance() {}

  static async checkCrewAttendanceHistory() {}
}
