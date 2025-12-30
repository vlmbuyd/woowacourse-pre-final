import { Console } from '@woowacourse/mission-utils';
import Input from './input.js';

class App {
  async run() {
    const { parsedCarNames, parsedAttempts } = await Input.getInput();
    Console.print(parsedCarNames);
    Console.print(parsedAttempts);
  }
}

export default App;
