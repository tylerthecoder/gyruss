import { Sprite } from './sprites/sprite';
import { Plane } from "./sprites/plane";
import { Stars } from './sprites/stars';
import Cello from './sprites/enemies/cello';

export class Model {
  sprites: Sprite[];
  mainCircleWidth: number;
  plane: Plane;

  constructor() {
    this.sprites = [];
    this.mainCircleWidth = Math.min(window.innerWidth, window.innerHeight);
    this.plane = new Plane(this);
    this.sprites = [];
    this.sprites.push(this.plane);
    this.sprites.push(new Stars(this));
    this.sprites.push(new Cello(this));
  }

  update() {
    for (const sprite of this.sprites) {
      sprite.update();
    }
  }

  removeSprite(s: Sprite) {
    this.sprites = this.sprites.filter(sprite => sprite != s);
  }
}