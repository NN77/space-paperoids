import * as PIXI from 'pixi.js';

import Component from './_component.abstract';
import DisplayPartial from './partials/display.partial';
import PositionPartial from './partials/position.partial';
import SpeedPartial from './partials/speed.partial';
import DestroyPartial from './partials/destroy.partial';

export default class ShootComponent extends Component {
  constructor(container: PIXI.Container, position: PIXI.Point) {
    super();

    const rocketTexture = PIXI.Texture.fromImage('assets/rocket.png');
    const rocket = new PIXI.Sprite(rocketTexture);

    this.addPartial(new DisplayPartial(container, rocket));
    this.addPartial(new PositionPartial(position.x, position.y));
    this.addPartial(new SpeedPartial(10, 0));
    this.addPartial(new DestroyPartial());
    // TODO add collision and delete on end of the container
  }
}