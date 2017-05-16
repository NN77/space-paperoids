import Engine from '../engines/_engine.abstract';
import Entity from '../utils/entity';
import Component from '../components/_component.abstract';

export default class CollisionEngine extends Engine {
  entity: Entity;

  constructor(entity: Entity) {
    super();
    this.entity = entity;
  }

  updateFrame(deltaTime: number) {
    const entities = this.manager.entityFilter(['collision']);

    entities.map(entity1 => {
      // only if entity is a paperoid
      if (entity1.partials.collision.group === 1) {
        for (let entity2 of entities) {
          const isPlayer1 = entity1.partials.collision.group === 0;
          const isEnemy1 = entity1.partials.collision.group === 1;
          const isPlayer2 = entity2.partials.collision.group === 0;
          const isEnemy2 = entity2.partials.collision.group === 1;

          if (entity1.id !== entity2.id &&
            this.collisionDetected(entity1, entity2) &&
            entity1.partials.collision.group !== entity2.partials.collision.group
          ) {
            if (isPlayer1 || isEnemy1) {
              this.entity.registerCollision(50, new PIXI.Point(entity1.partials.position.x, entity1.partials.position.y));
            }
            if (isPlayer2 || isEnemy2) {
              this.entity.registerCollision(50, new PIXI.Point(entity2.partials.position.x, entity2.partials.position.y));
            }
            this.manager.removeEntity(entity1);
            this.manager.removeEntity(entity2);
          }
        }
      }
    });
  }

  private collisionDetected(entity1: Component, entity2: Component) {
    // fast rectangle collision, for any arbitrarily shaped image, pixel-perfect algorithm is needed
    // TODO create polygons collision detection using PIXI.Polygon

    const e1posX = entity1.partials.position.x;
    const e1posY = entity1.partials.position.y;
    const e2posX = entity2.partials.position.x;
    const e2posY = entity2.partials.position.y;
    const e1width = entity1.partials.display.asset.width;
    const e1height = entity1.partials.display.asset.height;
    const e2width = entity2.partials.display.asset.width;
    const e2height = entity2.partials.display.asset.height;

    return !(e2posX > (e1posX + e1width) ||
    (e2posX + e2width) < e1posX ||
    e2posY > (e1posY + e1height) ||
    (e2posY + e2height) < e1posY);
  }
}