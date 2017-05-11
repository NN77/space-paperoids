import IPartial from './_partial.interface';

export default class MovePartial implements IPartial {
  name: string;
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.name = 'move';
    this.x = x;
    this.y = y;
  }
}