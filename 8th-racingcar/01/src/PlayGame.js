import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class PlayRound {
  constructor(cars) {
    this.cars = cars;
  }

  run() {
    this.cars.forEach((car, carName) => {
      car.moveOrNot();
      Console.print(`${carName} : ${'-'.repeat(car.distance)}`);
    });
  }
}

export default class PlayAllRound {
  static cars = new Map();

  static #createCars(carNames) {
    carNames.forEach((carName) => {
      const car = new Car(carName, 0);
      PlayAllRound.cars.set(carName, car);
    });
  }

  static run(carNames, attempts) {
    PlayAllRound.#createCars(carNames);

    Console.print('\n실행결과');

    Array.from({ length: attempts }, () => {
      const round = new PlayRound(PlayAllRound.cars);
      round.run();

      Console.print('\n');
    });
  }
}
