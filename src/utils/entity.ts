import * as PIXI from 'pixi.js';

import Manager from './manager';
import PlayerComponent from '../components/player.component';
import ShootComponent from '../components/shoot.component';
import PaperoidComponent from '../components/paperoid.component';

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

  registerShoot(position: PIXI.Point) {
    const shoot = new ShootComponent(this.container, position);
    this.manager.addEntity(shoot);
  }

  registerPaperoid() {
    const paperoid = new PaperoidComponent(this.container);
    this.manager.addEntity(paperoid);
  }
}