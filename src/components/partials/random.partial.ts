import IPartial from './_partial.interface';

export default class RandomMovePartial implements IPartial {
  name: string;
  public move: number;
  public speedX: number;
  public speedY: number;

  constructor() {
    this.name = 'randomMove';
    this.move = Math.random() * 10 + 30;
    this.speedX = - Math.random() * 5 - 1;
    this.speedY = Math.random() + 2;
  }
}