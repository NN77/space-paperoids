import Engine from '../engines/_engine.abstract';
import Math from '../utils/math';

export default class MoveEngine extends Engine {
  constructor() {
    super();
  }

  updateFrame(deltaTime: number) {
    const entities = this.manager.entityFilter(['position', 'speed']);

    entities.map(entity => {
      Math.addVector(
        entity.partials.position,
        entity.partials.position,
        entity.partials.speed,
      );
    });
  }
}