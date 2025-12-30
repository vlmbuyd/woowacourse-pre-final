import { MESSAGE } from './constants.js';

export default class Validator {
  static #attemptsValidators = [
    Validator.#isEmpty,
    Validator.#isNumber,
    Validator.#isOutOfRange,
  ];

  static #isEmpty(input) {
    if (input.trim() === '') throw new Error(MESSAGE.ERROR_EMPTY_INPUT);
  }

  // TODO: 쉼표 외의 문자가 있는지, 쉼표가 연속으로 있는 지 등의 검증로직 추가 필요
  //   static #includeComma(carNames) {
  //     return carNames.split(',').map((name) => name.trim());
  //   }

  static #isNumber(attempt) {
    if (isNaN(attempt)) throw new Error(MESSAGE.ERROR_NOT_NUMBER_INPUT);
  }

  static #isOutOfRange(attempt) {
    if (attempt < 0 || attempt > 5)
      throw new Error(MESSAGE.ERROR_OUT_OF_RANGE_INPUT);
  }

  // 차 이름 검증
  static validateCarNames(carNames) {
    Validator.#isEmpty(carNames);
  }

  // 시도 횟수 검증
  static validateAttempts(attempt) {
    Validator.#attemptsValidators.forEach((validator) => validator(attempt));
  }
}
