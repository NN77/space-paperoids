import Engine from './_engine.abstract';

export default class DisplayEngine extends Engine {
  constructor() {
    super();
  }

  public updateFrame(deltaTime: number): void {
    const entities = this.manager.entityFilter(['display', 'position']);

    entities.map(entity => {
      entity.partials.display.container.position.x = entity.partials.position.x;
      entity.partials.display.container.position.y = entity.partials.position.y;
    });
  }
}