import Engine from '../engines/_engine.abstract';

import Entity from '../utils/entity';

export default class ResetEngine extends Engine {
  entity: Entity;

  constructor(entity: Entity) {
    super();
    this.entity = entity;
  }

  updateFrame(deltaTime: number) {
    const entities = this.manager.entityFilter(['player']);
    let isPlayerAlive = false;

    if (entities.length !== 0) {
      isPlayerAlive = true;
    }

    if (!isPlayerAlive) {
      this.entity.registerGameOver();
      this.manager.resetGame(this);
    }
  }
}