import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';

export default class InputView {
  static async readInput(msg, key, args = null) {
    try {
      const input = await Console.readLineAsync(msg);
      Validator.validate(key, input, args);

      return input;
    } catch (err) {
      Console.print(err.message);
      return InputView.readInput(msg, key, args);
    }
  }
}
