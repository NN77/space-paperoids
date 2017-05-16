import * as PIXI from 'pixi.js';

import MathUtil from '../utils/math';

import Component from './_component.abstract';
import DisplayPartial from './partials/display.partial';
import PositionPartial from './partials/position.partial';
import SpeedPartial from './partials/speed.partial';
import FadePartial from './partials/fade.partial';

export default class ParticleComponent extends Component {
  constructor(container: PIXI.Container, position: PIXI.Point) {
    super();

    const particle = new PIXI.Graphics();
    const direction = Math.random() * 2 * Math.PI;

    particle.lineStyle(1, 0xffffff, 1);
    particle.drawCircle(0, 0, 5);


    const speed = MathUtil.multiple(
      new PIXI.Point(),
      new PIXI.Point(
        Math.cos(direction),
        Math.sin(direction)
      ),
      Math.random()
    );

    this.addPartial(new DisplayPartial(container, particle));
    this.addPartial(new PositionPartial(position.x, position.y));
    this.addPartial(new SpeedPartial(speed.x, speed.y));
    this.addPartial(new FadePartial());
  }
}