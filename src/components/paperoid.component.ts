import * as PIXI from 'pixi.js';

import Component from './_component.abstract';
import DisplayPartial from './partials/display.partial';
import PositionPartial from './partials/position.partial';
import SpeedPartial from './partials/speed.partial';
import RandomMovePartial from './partials/random.partial';

export default class PaperoidComponent extends Component {
  constructor(container: PIXI.Container) {
    super();

    const randomNumber = Math.floor((Math.random() * 3) + 1);
    const paperoidTexture = PIXI.Texture.fromImage(`assets/paperoid${randomNumber}.png`);
    const paperoid = new PIXI.Sprite(paperoidTexture);

    this.addPartial(new DisplayPartial(container, paperoid));
    this.addPartial(new PositionPartial(800, Math.round(Math.random() * 600)));
    this.addPartial(new SpeedPartial(0, 0));
    this.addPartial(new RandomMovePartial());
    // TODO collision, explosive
  }
}