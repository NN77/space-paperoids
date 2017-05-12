import IPartial from './_partial.interface';

export default class ShootPartial implements IPartial {
  name: string;
  isShooting: boolean;
  cooldown: number;
  cooldownCounter: number;

  constructor(cooldown: number) {
    this.name = 'shoot';
    this.isShooting = false;
    this.cooldown = cooldown;
    this.cooldownCounter = 0;
  }
}