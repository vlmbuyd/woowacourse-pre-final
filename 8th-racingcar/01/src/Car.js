import { MissionUtils } from '@woowacourse/mission-utils';

export default class Car {
  constructor(name, distance) {
    this.name = name;
    this.distance = distance;
  }

  #move() {
    this.distance += 1;
  }

  moveOrNot() {
    const randNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randNum >= 4) {
      this.#move();
      return true;
    }
    return;
  }
}
