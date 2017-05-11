import * as PIXI from 'pixi.js';

import Scene from './_scene.abstract';
import App from '../app/app';
import Button from '../components/button.component';

export default class MenuScene extends Scene {
  static gameScene = 'game';
  static exitLink = 'http://pixijs.download/dev/docs/index.html';
  static logoTexture = 'assets/menu-logo.png';
  static gameTexture = 'assets/menu-game.png';
  static exitTexture = 'assets/menu-exit.png';

  private menu: PIXI.extras.TilingSprite;

  constructor(sceneName: string) {
    super(sceneName);

    const menuTexture = PIXI.Texture.fromImage('assets/game-bg.png');
    this.menu = new PIXI.extras.TilingSprite(menuTexture, 800, 600);
    this.container.addChild(this.menu);

    const logo = PIXI.Texture.fromImage(MenuScene.logoTexture);
    this.registerChild(new PIXI.Sprite(logo), 240, 10);

    const game = PIXI.Texture.fromImage(MenuScene.gameTexture);
    this.registerChild(new Button(game, 'START', this.startGame,
      {fontSize: 80, dropShadow: true, dropShadowAngle: Math.PI / 180, rotation: -0.1, posX: 65, posY: 90}), 240, 150);

    const exit = PIXI.Texture.fromImage(MenuScene.exitTexture);
    this.registerChild(new Button(exit, 'EXIT', this.exit,
      {fontSize: 40, dropShadow: true, dropShadowAngle: Math.PI / 180, rotation: 0.1, posX: 40, posY: 37}), 320, 440);

    this.container.alpha = 0;
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

  private registerChild(childComponent: any, posx: number, posy: number) {
    childComponent.position.set(posx, posy);
    this.container.addChild(childComponent);
  }
}
