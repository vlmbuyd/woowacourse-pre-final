import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG, WINNING_STATS } from '../constants.js';

export default class CalculatePrize {
  constructor(lottos, winningNum, bonusNum) {
    this.lottos = lottos;
    this.winningNum = winningNum.map(Number);
    this.bonusNum = bonusNum;
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

  printWinningStats(winningStats) {
    [3, 4, 5, 'BONUS', 6].forEach((key) => {
      const amount = winningStats[key];
      Console.print(WINNING_STATS[key](amount));
    });
  }

  run() {
    Console.print(WINNING_STATS.TITLE);

    const winningStats = this.calculateWinningStats();
    this.printWinningStats(winningStats);
  }
}
