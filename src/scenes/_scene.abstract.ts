import * as PIXI from 'pixi.js';

abstract class Scene {
  public sceneName: string;
  public container: PIXI.Container;
  public ticker: PIXI.ticker.Ticker;
  protected timeStartMS: number;

  constructor(sceneName: string) {
    this.sceneName = sceneName;
    this.container = new PIXI.Container();
    this.ticker = new PIXI.ticker.Ticker();
    this.timeStartMS = 0;
  }

  protected abstract updateFrame(deltaTime: number): void;
}

export default Scene;
