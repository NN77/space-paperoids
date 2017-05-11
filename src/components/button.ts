import * as PIXI from 'pixi.js';

interface TextStyle {
  fontFamily?: string;
  fontSize?: number;
  color?: number;
  dropShadow?: boolean;
  dropShadowAlpha?: number;
  dropShadowAngle?: number;
  dropShadowDistance?: number;
  strokeThickness?: number;
  rotation?: number;
  posX?: number;
  posY?: number;
}

export default class Button extends PIXI.Container {
  public text: string;

  constructor(texture: PIXI.Texture, text: string, callback: () => void, textStyle?: TextStyle) {
    super();

    this.text = text;

    const button = new PIXI.Sprite(texture);
    button.buttonMode = true;
    button.interactive = true;

    button.on('mousedown', callback);

    // Text layer
    const innerText = new PIXI.Text(text, {
      fontFamily: textStyle.fontFamily || 'Impact',
      fontSize: textStyle.fontSize || 40,
      fill: textStyle.color || 0xffffff,
      dropShadow: textStyle.dropShadow || false,
      dropShadowAlpha: 0.35,
      dropShadowAngle: textStyle.dropShadowAngle || Math.PI / 6,
      dropShadowDistance: 2,
      strokeThickness: textStyle.strokeThickness || 0
    });

    const textPosX = textStyle.posX || 0;
    const textPosY = textStyle.posY || 0;

    innerText.rotation = textStyle.rotation || 0;
    innerText.position.set(textPosX, textPosY);

    button.addChild(innerText);
    this.addChild(button);
  }
}
