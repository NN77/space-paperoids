import Engine from '../engines/_engine.abstract';
import Entity from '../utils/entity';

export default class PaperoidEngine extends Engine {
  entity: Entity;
  paperoidDisplayTime: number;
  counter: number;

  constructor(entity: Entity, paperoidDisplayTime: number) {
    super();

    this.entity = entity;
    this.paperoidDisplayTime = paperoidDisplayTime;
    this.counter = 0;
  }

  updateFrame(deltaTime: number): void {
    this.counter += deltaTime;
    if (this.counter >= this.paperoidDisplayTime) {
      this.counter = 0;
      this.entity.registerPaperoid();
    }
  }
}