import * as PIXI from 'pixi.js';

import Scene from './_scene.abstract';
import App from '../app/app';

export default class SplashscreenScene extends Scene {
  static fadeOutTimeMS = 2000;
  static nextScene = 'menu';

  private splashscreen: PIXI.Sprite;

  constructor(sceneName: string) {
    super(sceneName);

    const splashTexture = PIXI.Texture.fromImage('assets/splash.png');
    this.splashscreen = new PIXI.Sprite(splashTexture);

    this.container.addChild(this.splashscreen);
    this.ticker.add(this.updateFrame, this);
    this.ticker.start();
  }

  /**
   * Reduce alpha channel of bitmap
   * every frame after the given time period
   * @param deltaTime
   */
  protected updateFrame(deltaTime: number): void {
    console.log('splash tickerrrrr........');
    const _fadeOutTimeMS = SplashscreenScene.fadeOutTimeMS;
    const _timeUpdated = this.timeStartMS += this.ticker.elapsedMS;

    this.timeElapsed(_fadeOutTimeMS) ? this.reduceAlphaChannel() : _timeUpdated;
  }

  /**
   * Check if x miliseconds have elapsed
   * @param timeMS
   */
  private timeElapsed(timeMS: number) {
    return this.timeStartMS + this.ticker.elapsedMS > timeMS;
  }

  /**
   * Reduce alpha channel of container and navigate to
   * next given scene if current faded to black
   */
  private reduceAlphaChannel() {
    this.splashscreen.alpha -= 0.025;
    if (this.splashscreen.alpha <= 0) {
      this.ticker.stop();
      App.goToScene(SplashscreenScene.nextScene);
    }
  }
}

