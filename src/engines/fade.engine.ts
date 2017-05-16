import Engine from '../engines/_engine.abstract';

export default class FadeEngine extends Engine {
  constructor() {
    super();
  }

  updateFrame(deltaTime: number) {
    const entities = this.manager.entityFilter(['fade', 'display']);

    entities.map(entity => {
      entity.partials.fade.alpha -= 0.01;
      entity.partials.display.container.alpha = entity.partials.fade.alpha;
      if (entity.partials.fade.alpha <= 0) {
        this.manager.removeEntity(entity);
      }
    });
  }
}