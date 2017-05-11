import IPartial from './_partial.interface';

export default class PositionPartial implements IPartial {
  name: string;
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.name = 'position';
    this.x = x;
    this.y = y;
  }
}