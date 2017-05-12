import Engine from './_engine.abstract';

export default class RandomMoveEngine extends Engine {
  constructor() {
    super();
  }

  public updateFrame(deltaTime: number): void {
    const entities = this.manager.entityFilter(['randomMove']);

    entities.map(entity => {
      const entityPosX = entity.partials.position.x;
      const entityRandomMove = entity.partials.randomMove.move;
      const entityRandomSpeedX = entity.partials.randomMove.speedY;

      entity.partials.speed.x = entity.partials.randomMove.speedX;
      entity.partials.speed.y = Math.cos(entityPosX / entityRandomMove) * entityRandomSpeedX;
    });
  }
}