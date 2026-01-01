import { ERROR_MSG, GAME_RULE, VALIDATION_KEY } from '../constants.js';

const validators = {
  [VALIDATION_KEY.PURCHASE_AMOUNT]: (value) =>
    Validator.validatePurchaseAmount(value),
  [VALIDATION_KEY.WINNING_NUMS]: (value) =>
    Validator.validateWinningNums(value),
  [VALIDATION_KEY.BONUS_NUMS]: (value, args) =>
    Validator.validateBonusNum(value, args),
};

export default class Validator {
  static validate(key, inputValue, args) {
    const validator = validators[key];
    if (validator) validator(inputValue, args);
  }

  static validatePurchaseAmount(purchaseAmount) {
    if (Number(purchaseAmount) % GAME_RULE.PRICE_UNIT !== 0) {
      throw new Error(`${ERROR_MSG.ERROR_PREFIX}${ERROR_MSG.INVALID_UNIT}`);
    }
  }

  static validateWinningNums(winningNum) {
    const winningNumList = winningNum.split(',');

    // 당첨 번호 6개인지
    if (winningNumList.length !== GAME_RULE.LOTTO_NUM_AMOUNT)
      throw new Error(
        `${ERROR_MSG.ERROR_PREFIX}${ERROR_MSG.INVALID_WINNING_AMOUNT}`
      );

    // 중복된 숫자 없는지
    const set = new Set(winningNumList);
    const filteredArr = [...set];
    if (filteredArr.length !== GAME_RULE.LOTTO_NUM_AMOUNT)
      throw new Error(`${ERROR_MSG.ERROR_PREFIX}${ERROR_MSG.DUPLICATE_NUM}`);

    // 1~45 사이의 숫자인지
    if (
      !winningNumList.every(
        (num) =>
          num >= GAME_RULE.LOTTO_MIN_NUM && num <= GAME_RULE.LOTTO_MAX_NUM
      )
    ) {
      throw new Error(`${ERROR_MSG.ERROR_PREFIX}${ERROR_MSG.OUT_OF_RNAGE}`);
    }
  }

  static validateBonusNum(bonusNum, winningNum) {
    const winningNumList = winningNum.split(',');

    const set = new Set([...winningNumList, ...bonusNum]);
    const filteredArr = [...set];

    // 당첨 번호 중 중복된 숫자가 있을 때
    if (
      filteredArr.length !==
      GAME_RULE.LOTTO_NUM_AMOUNT + GAME_RULE.BONUS_NUM_AMOUNT
    )
      throw new Error(`${ERROR_MSG.ERROR_PREFIX}${ERROR_MSG.DUPLICATE_NUM}`);

    // 1~45 사이의 숫자인지
    if (
      !(
        bonusNum >= GAME_RULE.LOTTO_MIN_NUM &&
        bonusNum <= GAME_RULE.LOTTO_MAX_NUM
      )
    ) {
      throw new Error(`${ERROR_MSG.ERROR_PREFIX}${ERROR_MSG.OUT_OF_RNAGE}`);
    }
  }
}
