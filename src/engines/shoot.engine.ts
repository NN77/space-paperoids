import * as PIXI from 'pixi.js';

import Engine from '../engines/_engine.abstract';
import Entity from '../utils/entity';

export default class ShootEngine extends Engine {
  entity: Entity;

  constructor(entity: Entity) {
    super();
    this.entity = entity;
  }

  updateFrame(deltaTime: number): void {
    const entities = this.manager.entityFilter(['shoot']);

    entities.map(entity => {
      const shootPartial = entity.partials.shoot;
      shootPartial.cooldownCounter -= deltaTime;

      if (shootPartial.isShooting) {
        shootPartial.cooldownCounter = shootPartial.cooldown;
        shootPartial.isShooting = false;

        const position = new PIXI.Point(
          entity.partials.position.x + entity.partials.display.asset.width - 20,
          entity.partials.position.y + (entity.partials.display.asset.height / 2) - 10
        );

        this.entity.registerShoot(position);
      }

    });
  }
}