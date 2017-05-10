import * as PIXI from 'pixi.js';

import Scene from './_scene.abstract';
import App from '../app/app';

export class MenuScene extends Scene {
  static gameScene = 'game';
  static exitLink = 'http://pixijs.download/dev/docs/index.html';

  private menu: PIXI.extras.TilingSprite;
  private logo: PIXI.Sprite;

  constructor(sceneName: string) {
    super(sceneName);

    const menuTexture = PIXI.Texture.fromImage('assets/menu-bg.png');
    this.menu = new PIXI.extras.TilingSprite(menuTexture, 800, 600);
    this.container.addChild(this.menu);

    const logoTexture = PIXI.Texture.fromImage('assets/logo.png');
    this.logo = new PIXI.Sprite(logoTexture);
    this.logo.position.set(240, 15);
    this.container.addChild(this.logo);

    this.ticker.add(this.updateFrame, this);
  }

  protected updateFrame(deltaTime: number): void {
    if (this.container.alpha < 1) {
      this.container.alpha += 0.01;
    }
    this.menu.tilePosition.x -= 1;
  }

  private startGame() {
    App.goToScene(MenuScene.gameScene);
  }

  private exit() {
    window.location.replace(MenuScene.exitLink);
  }

  // private registerContainerChild(imageSrc: string, childType: string, size: any, position: Object) {
  //   let texture = PIXI.Texture.fromImage(imageSrc);
  //
  //   switch (childType) {
  //     case 'TilingSprite':
  //       this.container.addChild(new PIXI.extras.TilingSprite(texture, size.width, size.height));
  //     break;
  //     case 'Sprite':
  //       this.container.addChild(new PIXI.extras.TilingSprite(texture, size.width, size.height));
  //     break;
  //   }
  // }
}
