import Engine from '../engines/_engine.abstract';
import Component from '../components/_component.abstract';
import App from '../app/app';

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

  public removeEntity(component: Component) {
    component.partials.display.container.destroy();
    this.entities = this.entities.filter(entity => entity.id !== component.id);
  }

  public addEngine(engine: Engine) {
    engine.add(this);
    this.engines.push(engine);
  }

  public resetGame(resetEngine: Engine) {
    this.engines = this.engines.filter(engine => engine !== resetEngine);
    setTimeout(() => {
      App.goToScene('menu');
    }, 2500);
  }

  public updateFrame(deltaTime: number) {
    this.engines.map(engine => {
      engine.updateFrame(deltaTime);
    });
  }
}