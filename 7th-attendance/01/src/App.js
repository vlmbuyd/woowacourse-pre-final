import * as fs from 'fs';
import path from 'path';
import { Console } from '@woowacourse/mission-utils';
import InputView from './view/InputView.js';

class App {
  async run() {
    let MODE = 0;

    while (MODE !== 'Q') {
      try {
        const mode = await InputView.selectFunc();
        MODE = mode;
      } catch (err) {
        Console.print(err.message);
        return;
      }
    }
  }
}

export default App;
