import * as PIXI from 'pixi.js';

import {SplashscreenScene} from '../scenes/splashscreen.scene';
import {MenuScene} from '../scenes/menu.scene';

export default class App {
  public static gameApp: PIXI.Application;
  private static gameScenes: any;

  constructor() {}

  public static start() {
    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container.
    App.gameApp = new PIXI.Application(800, 600);
    App.gameScenes = {
      splashscreen: new SplashscreenScene('splashscreen'),
      menu: new MenuScene('menu')
    };

    // The application will create a canvas element that could be inserted into the DOM.
    document.getElementById('gameContainer').appendChild(App.gameApp.view);

    App.gameApp.stage.addChild(App.gameScenes.splashscreen.container);
  }

  public static async goToScene(sceneName: string) {
    await App.gameScenes.splashscreen.ticker.stop();
    await App.gameApp.stage.removeChild(App.gameScenes.splashscreen.container);
    await App.gameApp.stage.addChild(App.gameScenes[sceneName].container);
    await App.gameScenes[sceneName].ticker.start();
    App.gameScenes[sceneName].container.alpha = 0;
  }
}