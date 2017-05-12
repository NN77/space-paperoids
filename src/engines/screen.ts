import Engine from '../engines/_engine.abstract';

export default class ScreenEngine extends Engine {
  constructor() {
    super();
  }

  updateFrame(deltaTime: number) {
    const entities = this.manager.entityFilter(['screen']);

    entities.map(entity => {
      if (entity.partials.screen) {
        if (entity.partials.position.x < 0) {
          entity.partials.position.x = 0;
        }
        if (entity.partials.position.x > 800 - entity.partials.display.asset.width) {
          entity.partials.position.x = 800 - entity.partials.display.asset.width;
        }
        if (entity.partials.position.y < 0) {
          entity.partials.position.y = 0;
        }
        if (entity.partials.position.y > 600 - entity.partials.display.asset.height) {
          entity.partials.position.y = 600 - entity.partials.display.asset.height;
        }
      }
    });
  }
}