import { Console } from '@woowacourse/mission-utils';
import InputView from './view/InputView.js';
import { CSVParser, DataParser } from './utils/Parser.js';
import { ATTENDANCE_MODE } from './constants.js';

class App {
  async run() {
    let MODE = null;

    while (MODE !== ATTENDANCE_MODE.Q) {
      try {
        const mode = await InputView.selectFunc();
        MODE = ATTENDANCE_MODE[mode];

        const attendanceRecords = CSVParser.getAttendanceRecord();
        DataParser.determineAttendanceStatus(attendanceRecords);

        const { nickname, time } = await InputView.readInput(
          MODE,
          attendanceRecords
        );
      } catch (err) {
        Console.print(err.message);
        throw err;
      }
    }
  }
}

export default App;
