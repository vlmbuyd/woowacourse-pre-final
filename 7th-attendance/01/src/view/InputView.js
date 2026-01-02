import { Console } from '@woowacourse/mission-utils';
import { INPUT_MSG, VALIDATION_KEY } from '../constants.js';
import Validator from '../utils/Validator.js';

export default class InputView {
  static async selectFunc() {
    const mode = await Console.readLineAsync(INPUT_MSG.SELECT);
    Validator.validate(VALIDATION_KEY.SELECTION_PROMPT, mode);

    return mode;
  }
}
