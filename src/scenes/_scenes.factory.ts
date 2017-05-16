import Scene from './_scene.abstract';

import GameScene from './game.scene';
import MenuScene from './menu.scene';
import SplashscreenScene from './splashscreen.scene';

export default class SceneFactory {

  private constructor() {}

  public static create(sceneName: string): Scene {

    let scene: Scene;

    switch (sceneName) {
      case 'splashscreen':
        scene = new SplashscreenScene('splashscreen');
        break;
      case 'menu':
        scene = new MenuScene('menu');
        break;
      case 'game':
        scene = new GameScene('game');
        break;
    }

    return scene;
  }

}
