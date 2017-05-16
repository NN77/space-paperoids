import * as PIXI from 'pixi.js';

import Component from './_component.abstract';
import DisplayPartial from './partials/display.partial';
import PositionPartial from './partials/position.partial';

export default class GameOverComponent extends Component {
  constructor(container: PIXI.Container) {
    super();

    const gameOverTexture = PIXI.Texture.fromImage('assets/game-over.png');
    const gameOver = new PIXI.Sprite(gameOverTexture);

    this.addPartial(new DisplayPartial(container, gameOver));
    this.addPartial(new PositionPartial(283, 174));
  }
}