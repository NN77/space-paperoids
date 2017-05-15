import * as PIXI from 'pixi.js';

import Scene from './_scene.abstract';
import Manager from '../utils/manager';
import Entity from '../utils/entity';
import DisplayEngine from '../engines/display.engine';
import KeyboardEngine from '../engines/keybord.engine';
import MoveEngine from '../engines/move.engine';
import ShootEngine from '../engines/shoot.engine';
import ScreenEngine from '../engines/screen.engine';
import PaperoidEngine from '../engines/paperoid.engine';
import RandomMoveEngine from '../engines/random.engine';
import DestroyEngine from '../engines/destroy.engine';

export default class GameScene extends Scene {
  static gameTextureAsset = 'assets/game-bg.png';
  static earthTextureAsset = 'assets/earth-line.png';

  private game: PIXI.extras.TilingSprite;
  private earth: PIXI.extras.TilingSprite;
  private manager: Manager;
  private entity: Entity;
  private paperoidsCounter = 0;
  public static keybordKeys: boolean[];

  constructor(sceneName: string) {
    super(sceneName);

    window.addEventListener('keyup', GameScene.onKeyUp, false);
    window.addEventListener('keydown', GameScene.onKeyDown, false);

    const gameTexture = PIXI.Texture.fromImage(GameScene.gameTextureAsset);
    this.game = new PIXI.extras.TilingSprite(gameTexture, 800, 600);
    this.registerChild(this.game, 0, 0);

    const earthTexture = PIXI.Texture.fromImage(GameScene.earthTextureAsset);
    this.earth = new PIXI.extras.TilingSprite(earthTexture, 800, 600);
    this.registerChild(this.earth, 0, 0);

    this.manager = new Manager();
    this.entity = new Entity(this.manager, this.container);

    // Setup array of empty keyboard keys and paperoid
    GameScene.keybordKeys = [];
    this.paperoidsCounter = 0;
    // Engines
    this.manager.addEngine(new DisplayEngine());
    this.manager.addEngine(new KeyboardEngine(GameScene.keybordKeys));
    this.manager.addEngine(new MoveEngine());
    this.manager.addEngine(new ShootEngine(this.entity));
    this.manager.addEngine(new ScreenEngine());
    this.manager.addEngine(new PaperoidEngine(this.entity, 120));
    this.manager.addEngine(new RandomMoveEngine());
    this.manager.addEngine(new DestroyEngine());
    // TODO collision and explode engine

    this.entity.registerPlayer();
    this.entity.registerPaperoid();

    this.container.alpha = 0;
    this.ticker.add(this.updateFrame, this);
  }

  protected updateFrame(deltaTime: number) {
    if (this.container.alpha < 1) {
      this.container.alpha += 0.01;
    }
    this.game.tilePosition.x -= 2;
    this.earth.tilePosition.x -= 6;
    this.manager.updateFrame(deltaTime);
  }

  private registerChild(childComponent: any, posx: number, posy: number) {
    childComponent.position.set(posx, posy);
    this.container.addChild(childComponent);
  }

  public static onKeyDown(event: KeyboardEvent): void {
    console.log(event.keyCode);
    GameScene.keybordKeys[event.keyCode] = true;
    event.preventDefault();
  };

  public static onKeyUp(event: KeyboardEvent): void {
    delete GameScene.keybordKeys[event.keyCode];
  };
}