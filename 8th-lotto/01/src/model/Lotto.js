import { ERROR_MSG } from '../constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(`${ERROR_MSG.ERROR_PREFIX} ${ERROR_MSG.OUT_OF_RANGE}`);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
