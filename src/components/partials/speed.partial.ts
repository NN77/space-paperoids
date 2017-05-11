import IPartial from './_partial.interface';

export default class SpeedPartial implements IPartial {
  name: string;
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.name = 'speed';
    this.x = x;
    this.y = y;
  }
}