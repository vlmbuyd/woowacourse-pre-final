import { Console } from '@woowacourse/mission-utils';
import { GAME_RULE, OUTPUT_MSG, WINNING_STATS } from '../constants.js';

export default class CalculatePrize {
  constructor(lottos, winningNum, bonusNum) {
    this.lottos = lottos;
    this.winningNum = winningNum.split(',').map(Number);
    this.bonusNum = Number(bonusNum);
  }

  matchWinningPrize(winningPrize, arrLength, lottoNumbers) {
    // 중복 제거한 두 배열로부터 -> 일치 개수를 뽑기 위한 매핑 객체
    // 합친 배열 길이 : 일치 개수
    const arrToMatchingMap = {
      9: 3,
      8: 4,
      7: 5,
      6: 6,
    };

    let numOfMatch = arrToMatchingMap[arrLength]; // 일치한 개수

    if (!numOfMatch) return;

    if (numOfMatch === 5 && lottoNumbers.includes(this.bonusNum)) {
      numOfMatch = 'BONUS';
    }

    winningPrize[numOfMatch] += 1;
  }

  calculateWinningStats() {
    // 최종 당첨 내역
    const winningPrize = {
      3: 0,
      4: 0,
      5: 0,
      BONUS: 0,
      6: 0,
    };

    this.lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();

      const set = new Set([...this.winningNum, ...lottoNumbers]);
      const filteredArr = [...set];

      this.matchWinningPrize(winningPrize, filteredArr.length, lottoNumbers);
    });

    return winningPrize;
  }

  calaulateProfitRate(winningStats) {
    const winningPrizeMap = {
      3: 5000,
      4: 50000,
      5: 1500000,
      BONUS: 30000000,
      6: 2000000000,
    };

    const purchaseAmount = this.lottos.length;

    let totalWinningPrize = 0;
    Object.keys(winningStats).forEach((key) => {
      totalWinningPrize += winningPrizeMap[key] * winningStats[key];
    });

    return (totalWinningPrize / (purchaseAmount * GAME_RULE.PRICE_UNIT)) * 100;
  }

  printWinningStats(winningStats) {
    [3, 4, 5, 'BONUS', 6].forEach((key) => {
      const amount = winningStats[key];
      Console.print(WINNING_STATS[key](amount));
    });
  }

  run() {
    Console.print(WINNING_STATS.TITLE);

    // 당첨 내역 계산 및 출력
    const winningStats = this.calculateWinningStats();
    this.printWinningStats(winningStats);

    // 수익률 계산 및 출력
    const profitRate = this.calaulateProfitRate(winningStats);
    Console.print(OUTPUT_MSG.PROFIT_RATE(profitRate.toFixed(1)));
  }
}
