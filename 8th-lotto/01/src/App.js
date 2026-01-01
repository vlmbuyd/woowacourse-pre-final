import CalculatePrize from './model/CalculatePrize.js';
import LottoMachine from './model/LottoMachine.js';
import InputView from './view/InputView.js';

class App {
  async run() {
    const purchaseAmount = await InputView.readPurchaseAmount();

    const lottoMachine = new LottoMachine(purchaseAmount);
    const lottos = lottoMachine.run();

    const winningNum = await InputView.readWinningNums();
    const bonusNum = await InputView.readBonusNum(winningNum);

    const calculate = new CalculatePrize(lottos, winningNum, bonusNum);
    calculate.run();
  }
}

export default App;
