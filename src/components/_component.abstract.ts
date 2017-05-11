import IPartial from './partials/_partial.interface';
import Manager from '../utils/manager';

export abstract class Component {
  id: number;
  partials: { [key: string]: any };

  constructor() {
    this.id = Component.GENERATE_ID();
    this.partials = {};
  }

  addPartial(partial: IPartial): Component {
    this.partials[partial.name] = partial;
    return this;
  }

  removePartial(partialName: string): Component {
    delete this.partials[partialName];
    return this;
  }

  /**
   * Static Methods
   */

  static GENERATE_ID (): number {
    let date: string = new Date().toISOString();
    return Date.parse(date) + Math.floor(999999999999 * Math.random());
  }
}

export default Component;