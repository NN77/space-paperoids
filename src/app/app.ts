import * as PIXI from 'pixi.js';

import Scene from '../scenes/_scene.abstract';
import SceneFactory from '../scenes/_scenes.factory';

export default class App {
  public static gameApp: PIXI.Application;
  public static currentSceneName: string;
  public static currentScene: Scene;
  private static scenes: any;

  constructor() {}

  public static start() {
    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container.
    App.gameApp = new PIXI.Application(800, 600);
    App.scenes = {};

    // The application will create a canvas element that could be inserted into the DOM.
    document.getElementById('gameContainer').appendChild(App.gameApp.view);

    App.addScene('splashscreen');
  }

  /**
   * Remove current scene container from the root
   * @param sceneName
   */
  public static goToScene(sceneName: string) {
    App.scenes[App.currentSceneName].ticker.stop();
    App.gameApp.stage.removeChild(App.scenes[App.currentSceneName].container);

    delete App.scenes[App.currentSceneName];
    App.addScene(sceneName);
  }

  /**
   * Sets up new current scene display container that's rendered
   * @param sceneName
   */
  public static addScene(newScene: string) {
    this.currentScene = SceneFactory.create(newScene);
    App.scenes[newScene] = this.currentScene;
    App.currentSceneName = newScene;
    App.gameApp.stage.addChild(App.scenes[newScene].container);
    App.scenes[newScene].ticker.start();
  }
}