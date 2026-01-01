import { ERROR_MSG, GAME_RULE } from '../constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(
        `${ERROR_MSG.ERROR_PREFIX} ${ERROR_MSG.INVALID_LOTTO_AMOUNT}`
      );
    }

    // 중복된 숫자 없는지
    const set = new Set(numbers);
    const filteredArr = [...set];
    if (filteredArr.length !== GAME_RULE.LOTTO_NUM_AMOUNT)
      throw new Error(`${ERROR_MSG.ERROR_PREFIX}${ERROR_MSG.DUPLICATE_NUM}`);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
