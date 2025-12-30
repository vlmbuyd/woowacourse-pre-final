import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, SEPERATOR } from './constants.js';
import Validator from './Validator.js';

export default class Input {
  static async getInput() {
    const carNames = await Console.readLineAsync(MESSAGE.INPUT_CARNAMES);
    Validator.validateCarNames(carNames);

    const attempts = await Console.readLineAsync(MESSAGE.INPUT_ATTEMPTS);
    Validator.validateAttempts(attempts);

    const parsedCarNames = carNames
      .split(SEPERATOR.COMMA)
      .map((car) => car.trim());

    const parsedAttempts = Number(attempts);

    return { parsedCarNames, parsedAttempts };
  }
}
