import { MESSAGE, SEPERATOR } from './constants.js';

export default class Validator {
  static #attemptsValidators = [
    Validator.#isEmpty,
    Validator.#isNumber,
    Validator.#isOutOfRange,
  ];

  static #isEmpty(input) {
    if (input.trim() === '') throw new Error(MESSAGE.ERROR_EMPTY_INPUT);
  }

  static #isNumber(attempt) {
    if (isNaN(attempt)) throw new Error(MESSAGE.ERROR_NOT_NUMBER_INPUT);
  }

  static #isOutOfRange(carNames) {
    carNames.split(SEPERATOR.COMMA).forEach((carName) => {
      if (carName.length > 5) throw new Error(MESSAGE.ERROR_OUT_OF_RANGE_INPUT);
    });
  }

  // 차 이름 검증
  static validateCarNames(carNames) {
    Validator.#isEmpty(carNames);
    Validator.#isOutOfRange(carNames);
  }

  // 시도 횟수 검증
  static validateAttempts(attempt) {
    Validator.#attemptsValidators.forEach((validator) => validator(attempt));
  }
}
