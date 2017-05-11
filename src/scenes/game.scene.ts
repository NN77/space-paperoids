import * as PIXI from 'pixi.js';

import Scene from './_scene.abstract';

export default class GameScene extends Scene {
  private game: PIXI.extras.TilingSprite;

  constructor(sceneName: string) {
    super(sceneName);

    const gameTexture = PIXI.Texture.fromImage('assets/game-bg.png');
    this.game = new PIXI.extras.TilingSprite(gameTexture, 800, 600);
    this.container.addChild(this.game);

    this.container.alpha = 0;
    this.ticker.add(this.updateFrame, this);
  }

  protected updateFrame(deltaTime: number) {
    if (this.container.alpha < 1) {
      this.container.alpha += 0.01;
    }
    this.game.tilePosition.x -= 5;
  }

  private registerChild(childComponent: any, posx: number, posy: number) {
    childComponent.position.set(posx, posy);
    this.container.addChild(childComponent);
  }
}