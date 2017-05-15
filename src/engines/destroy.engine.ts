import Engine from '../engines/_engine.abstract';

export default class DestroyEngine extends Engine {
  constructor() {
    super();
  }

  updateFrame(deltaTime: number) {
    const entities = this.manager.entityFilter(['destroy', 'position']);

    entities.map(entity => {
      if (entity.partials.position.x > 800 || entity.partials.position.x + entity.partials.display.asset.width < 0) {
        this.manager.removeEntity(entity);
      }
    });
  }
}