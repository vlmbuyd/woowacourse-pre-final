import { Console } from '@woowacourse/mission-utils';
import InputView from './view/InputView.js';
import { CSVParser, DataParser } from './utils/Parser.js';

class App {
  async run() {
    let MODE = 0;

    while (MODE !== 'Q') {
      try {
        const mode = await InputView.selectFunc();
        MODE = mode;

        const attendanceRecords = CSVParser.getAttendanceRecord();
        DataParser.determineAttendanceStatus(attendanceRecords);
      } catch (err) {
        Console.print(err.message);
        return;
      }
    }
  }
}

export default App;
