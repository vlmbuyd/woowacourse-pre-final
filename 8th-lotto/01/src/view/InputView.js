import { Console } from '@woowacourse/mission-utils';
import { INPUT_MSG } from '../constants.js';
import Validator from '../utils/Validator.js';

// TODO: 반복 로직 리팩토링 필요
export default class InputView {
  static async readPurchaseAmount() {
    try {
      const purchaseAmount = await Console.readLineAsync(
        INPUT_MSG.PURCHASE_AMOUNT
      );
      Validator.validatePurchaseAmount(purchaseAmount);

      return Number(purchaseAmount);
    } catch (err) {
      Console.print(err.message);
      return InputView.readPurchaseAmount();
    }
  }

  static async readWinningNums() {
    try {
      const winningNum = await Console.readLineAsync(INPUT_MSG.WINNING_NUMBER);
      Validator.validateWinningNums(winningNum);

      return winningNum.split(',');
    } catch (err) {
      Console.print(err);
      InputView.readWinningNums();
    }
  }

  static async readBonusNum(winningNum) {
    try {
      const bonusNum = await Console.readLineAsync(INPUT_MSG.BONUS_NUMBER);
      Validator.validateBonusNum(bonusNum, winningNum);

      return Number(bonusNum);
    } catch (err) {
      Console.print(err);
      InputView.readBonusNum(winningNum);
    }
  }
}
