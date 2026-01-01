import { INPUT_MSG, VALIDATION_KEY } from './constants.js';
import CalculatePrize from './model/CalculatePrize.js';
import LottoMachine from './model/LottoMachine.js';
import InputView from './view/InputView.js';

class App {
  async run() {
    const purchaseAmount = await InputView.readInput(
      INPUT_MSG.PURCHASE_AMOUNT,
      VALIDATION_KEY.PURCHASE_AMOUNT
    );

    const lottoMachine = new LottoMachine(Number(purchaseAmount));
    const lottos = lottoMachine.run();

    const winningNum = await InputView.readInput(
      INPUT_MSG.WINNING_NUMBER,
      VALIDATION_KEY.WINNING_NUMS
    );
    const bonusNum = await InputView.readInput(
      INPUT_MSG.BONUS_NUMBER,
      VALIDATION_KEY.BONUS_NUMS,
      winningNum
    );

    const calculate = new CalculatePrize(lottos, winningNum, bonusNum);
    calculate.run();
  }
}

export default App;
