import { ERROR_MSG, VALIDATION_KEY } from '../constants.js';

const validators = {
  [VALIDATION_KEY.SELECTION_PROMPT]: (value) =>
    Validator.validateSelectionPrompt(value),
};

export default class Validator {
  static validate(key, inputValue) {
    const validator = validators[key];
    if (validator) validator(inputValue);
  }

  static validateSelectionPrompt(inputPrompt) {
    if (!['1', '2', '3', '4', 'Q'].includes(inputPrompt)) {
      throw new Error(`${ERROR_MSG.PREFIX} 잘못된 값을 입력하였습니다.`);
    }
  }
}
