import * as PIXI from 'pixi.js';

import Component from '../components/_component.abstract';
import Engine from './_engine.abstract';
import Math from '../utils/math';
import SpeedPartial from '../components/partials/speed.partial';

export default class KeyboardEngine extends Engine {
  keyboardKeys: boolean[];
  directions: { [key: string]: PIXI.Point };

  constructor(keyboardKeys: boolean[]) {
    super();

    this.keyboardKeys = keyboardKeys;
    this.directions = {
      up: new PIXI.Point(0, -1),
      right: new PIXI.Point(1, 0),
      down: new PIXI.Point(0, 1),
      left: new PIXI.Point(-1, 0)
    };
  }

  updateFrame(deltaTime: number) {
    const canShoot = this.manager.entities;
    const canMove = this.manager.entities;

    // Movement
    for (let entity of canMove) {
      if (this.keyboardKeys[68]) {
        this.move(entity, 'right');
      }

      if (this.keyboardKeys[83]) {
        this.move(entity, 'down');
      }

      if (this.keyboardKeys[65]) {
        this.move(entity, 'left');
      }

      if (this.keyboardKeys[87]) {
        this.move(entity, 'up');
      }
    }

    // Shoot
    // for (let entity of canShoot) {
    //   if (this.keyboardKeys[32]) {
    //
    //   }
  }

  move(entity: Component, direction: string) {
    const v1 = entity.partials.speed;
    const v2 = new SpeedPartial(
      this.directions[direction].x * entity.partials.move.x,
      this.directions[direction].y * entity.partials.move.y,
    );

    const speed = Math.addVector(
      new SpeedPartial(0, 0), v1, v2
    );

    entity.partials.speed = speed;
  }
}