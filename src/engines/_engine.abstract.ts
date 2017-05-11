import Manager from '../utils/manager';

abstract class Engine {
  manager: Manager;

  constructor() {}

  public add(manager: Manager): void {
    this.manager = manager;
  }

  abstract updateFrame(deltaTime: number): void;
}

export default Engine;