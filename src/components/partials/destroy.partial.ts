import IPartial from './_partial.interface';

export default class DestroyPartial implements IPartial {
  name: string;

  constructor() {
    this.name = 'destroy';
  }
}