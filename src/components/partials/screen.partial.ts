import IPartial from './_partial.interface';

export default class ScreenPartial implements IPartial {
  name: string;

  constructor() {
    this.name = 'screen';
  }
}