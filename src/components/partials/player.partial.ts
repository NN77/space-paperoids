import IPartial from './_partial.interface';

export default class PlayerPartial implements IPartial {
  name: string;

  constructor() {
    this.name = 'player';
  }
}