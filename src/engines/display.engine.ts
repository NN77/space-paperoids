import Engine from './_engine.abstract';

export default class DisplayEngine extends Engine {
  constructor() {
    super();
  }

  public updateFrame(deltaTime: number): void {
    const entities = this.manager.entities;

    for (let entity of entities) {
      // if (entity.id === 10) {
      //   console.log(entity.partials.display.container.position.x);
      //   console.log(entity.partials.position.x);
      // }
      entity.partials.display.container.position.x = entity.partials.position.x;
      entity.partials.display.container.position.y = entity.partials.position.y;
    }
  }
}