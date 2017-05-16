import IPartial from './_partial.interface';

export default class FadePartial implements IPartial {
  name: string;
  alpha: number;

  constructor() {
    this.name = 'fade';
    this.alpha = 1;
  }
}