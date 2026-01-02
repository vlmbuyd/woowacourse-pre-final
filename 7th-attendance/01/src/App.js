import { Console } from '@woowacourse/mission-utils';
import InputView from './view/InputView.js';
import { CSVParser, DataParser } from './utils/Parser.js';
import { ATTENDANCE_MODE } from './constants.js';
import AttendanceManager from './model/AttendanceManager.js';

class App {
  async run() {
    let MODE = null;

    while (MODE !== ATTENDANCE_MODE['q']) {
      try {
        const mode = await InputView.selectFunc();
        MODE = ATTENDANCE_MODE[mode];

        // 데이터 파싱
        const attendanceRecords = CSVParser.getAttendanceRecord();
        const dataParser = new DataParser(attendanceRecords);
        dataParser.determineAttendanceStatus();

        // 선택 기능에 따른 추가 입력
        const inputs = await InputView.readInput(MODE, attendanceRecords);

        const manager = new AttendanceManager(attendanceRecords);
        manager.run(MODE, inputs);
      } catch (err) {
        Console.print(err.message);
        throw err;
      }
    }
  }
}

export default App;
