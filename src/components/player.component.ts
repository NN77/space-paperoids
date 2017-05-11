import * as PIXI from 'pixi.js';

import Component from './_component.abstract';
import PlayerPartial from './partials/player.partial';
import DisplayPartial from './partials/display.partial';
import PositionPartial from './partials/position.partial';
import SpeedPartial from './partials/speed.partial';
import MovePartial from './partials/move.partial';

export default class PlayerComponent extends Component {
  constructor(container: PIXI.Container) {
    super();

    this.id = 10;

    const playerTexture = PIXI.Texture.fromImage('assets/ship.png');
    const player = new PIXI.Sprite(playerTexture);

    this.addPartial(new PlayerPartial());
    this.addPartial(new DisplayPartial(container, player));
    this.addPartial(new PositionPartial(15, 15));
    this.addPartial(new SpeedPartial(0, 0));
    this.addPartial(new MovePartial(0.4, 0.4));
  }
}