import Engine from '../engines/_engine.abstract';
import Component from '../components/_component.abstract';

export default class Manager {
  entities: Component[];
  engines: Engine[];

  constructor() {
    this.engines = [];
    this.entities = [];
  }

  public entityFilter(allowedPartials: string[]) {
    return this.entities.filter(entity => {
      let properPartial = 0;
      allowedPartials.map(key => {
        if (entity.partials[key]) {
          properPartial++;
        }
      });
      if (properPartial === allowedPartials.length) {
        return true;
      }
    });
  }

  public addEntity(component: Component) {
    this.entities.push(component);
  }

  public addEngine(engine: Engine) {
    engine.add(this);
    this.engines.push(engine);
  }

  public updateFrame(deltaTime: number) {
    this.engines.map(engine => {
      engine.updateFrame(deltaTime);
    });
  }
}