import * as PIXI from 'pixi.js';

import Manager from './manager';
import PlayerComponent from '../components/player.component';

export default class Entity {
  container: PIXI.Container;
  manager: Manager;

  constructor(manager: Manager, container: PIXI.Container) {
    this.manager = manager;
    this.container = container;
  }

  registerPlayer() {
    const player = new PlayerComponent(this.container);
    this.manager.addEntity(player);
  }
}