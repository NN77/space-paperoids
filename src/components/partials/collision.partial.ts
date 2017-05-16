import IPartial from './_partial.interface';

export default class CollisionPartial implements IPartial {
  name: string;
  group: number;

  constructor(group: number) {
    this.name = 'collision';
    this.group = group;
  }
}