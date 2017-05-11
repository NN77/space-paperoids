import Engine from '../engines/_engine.abstract';
import Component from '../components/_component.abstract';

export default class Manager {
  entities: Component[];
  engines: Engine[];

  constructor() {
    this.engines = [];
    this.entities = [];
  }

  public addEntity(component: Component) {
    this.entities.push(component);
  }

  public addEngine(engine: Engine) {
    engine.add(this);
    this.engines.push(engine);
  }

  public updateFrame(deltaTime: number) {
    for (let engine of this.engines) {
      engine.updateFrame(deltaTime);
    }
  }
}