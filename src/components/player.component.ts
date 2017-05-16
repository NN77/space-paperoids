import * as PIXI from 'pixi.js';

import Component from './_component.abstract';
import PlayerPartial from './partials/player.partial';
import DisplayPartial from './partials/display.partial';
import PositionPartial from './partials/position.partial';
import SpeedPartial from './partials/speed.partial';
import MovePartial from './partials/move.partial';
import ShootPartial from './partials/shoot.partial';
import ScreenPartial from './partials/screen.partial';
import CollisionPartial from './partials/collision.partial';

export default class PlayerComponent extends Component {
  constructor(container: PIXI.Container) {
    super();

    const playerTexture = PIXI.Texture.fromImage('assets/ship.png');
    const player = new PIXI.Sprite(playerTexture);

    this.addPartial(new PlayerPartial());
    this.addPartial(new DisplayPartial(container, player));
    this.addPartial(new PositionPartial(15, 240));
    this.addPartial(new SpeedPartial(0, 0));
    this.addPartial(new MovePartial(0.4, 0.4));
    this.addPartial(new ShootPartial(20));
    this.addPartial(new ScreenPartial());
    this.addPartial(new CollisionPartial(0));
  }
}