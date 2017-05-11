import * as PIXI from 'pixi.js';

import Scene from '../scenes/_scene.abstract';
import SplashscreenScene from '../scenes/splashscreen.scene';
import MenuScene from '../scenes/menu.scene';
import GameScene from '../scenes/game.scene';

export default class App {
  public static gameApp: PIXI.Application;
  private static gameScenes: any;
  public static current: Scene = new SplashscreenScene('splashscreen');

  constructor() {}

  public static start() {
    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container.
    App.gameApp = new PIXI.Application(800, 600);
    App.gameScenes = {
      splashscreen: new SplashscreenScene('splashscreen'),
      menu: new MenuScene('menu'),
      game: new GameScene('game')
    };
    App.current = new SplashscreenScene('splashscreen');

    // The application will create a canvas element that could be inserted into the DOM.
    document.getElementById('gameContainer').appendChild(App.gameApp.view);

    App.gameApp.stage.addChild(App.gameScenes.splashscreen.container);
  }

  public static async goToScene(sceneName: string) {
    // Remove current scene container from the root
    // display container that's rendered
    App.gameScenes[App.current.sceneName].ticker.stop();
    App.gameApp.stage.removeChild(App.gameScenes[App.current.sceneName].container);

    // Add new scene
    App.gameApp.stage.addChild(App.gameScenes[sceneName].container);
    App.gameScenes[sceneName].ticker.start();

    // Set new current scene
    App.current = App.gameScenes[sceneName];
  }
}