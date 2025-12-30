import { Console } from '@woowacourse/mission-utils';

export default class Winner {
  static winner = [];

  static #pickTheWinner(cars) {
    let max = -999;
    cars.forEach((car, carName) => {
      if (car.distance === 0) return;

      // 같은 경우
      if (car.distance === max) {
        Winner.winner.push(carName);
      }

      // 큰 경우
      if (car.distance > max) {
        max = car.distance;
        Winner.winner = [];
        Winner.winner.push(carName);
      }
    });
  }

  static #printTheWinner() {
    // TODO: 매직넘버 네이밍 고민
    if (Winner.winner.length === 0) {
      Console.print('우승자가 없습니다.');
      return;
    }

    Console.print(`최종 우승자 : ${Winner.winner}`);
  }

  static announce(cars) {
    Winner.#pickTheWinner(cars);
    Winner.#printTheWinner();
  }
}
