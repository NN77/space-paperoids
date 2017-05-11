import * as PIXI from 'pixi.js';

import IPartial from './_partial.interface';

export default class DisplayPartial implements IPartial {
  public name: string;
  public container: PIXI.Container;
  public asset: PIXI.DisplayObject;

  constructor(container: PIXI.Container, asset: PIXI.DisplayObject) {
    this.name = 'display';
    this.container = new PIXI.Container();
    this.asset = asset;

    this.container.x = 800;
    this.container.addChild(this.asset);
    container.addChild(this.container);
  }
}