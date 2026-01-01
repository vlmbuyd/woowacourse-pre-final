import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { GAME_RULE, OUTPUT_MSG } from '../constants.js';
import Lotto from './Lotto.js';

export default class LottoMachine {
  constructor(purchaseAmount) {
    this.purchaseAmount = purchaseAmount / GAME_RULE.PRICE_UNIT;
  }

  issueLottos() {
    const lottos = [];

    Array.from({ length: this.purchaseAmount }, () => {
      const lottoNum = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b);

      const lotto = new Lotto(lottoNum);
      lottos.push(lotto);
    });

    return lottos;
  }

  printResult(lottos) {
    lottos.forEach((lotto) => {
      Console.print(lotto.getNumbers());
    });
    Console.print('\n');
  }

  run() {
    Console.print(OUTPUT_MSG.PURCHASE_AMOUNT(this.purchaseAmount));

    const lottos = this.issueLottos();
    this.printResult(lottos);

    return lottos;
  }
}
