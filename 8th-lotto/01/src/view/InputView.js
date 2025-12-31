import { Console } from '@woowacourse/mission-utils';
import { INPUT_MSG } from '../constants.js';
import Validator from '../utils/Validator.js';

export default class InputView {
  static async readPurchaseAmount() {
    try {
      const purchaseAmount = await Console.readLineAsync(
        INPUT_MSG.PURCHASE_AMOUNT
      );
      Validator.validatePurchaseAmount(purchaseAmount);

      return Number(purchaseAmount);
    } catch (err) {
      Console.print(err);
      InputView.readPurchaseAmount();
    }
  }
}
