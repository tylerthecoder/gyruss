import { sw, sh } from "../view";
import { Model } from "../model";
import { Paint } from '../paint';

export class Sprite {
  public dist: number;
  public theta: number;
  public w: number;
  public h: number;
  public model: Model;

  constructor(w: number, h: number, m: Model) {
    this.dist = 0;
    this.theta = 0;
    this.w = w;
    this.h = h;
    this.model = m;
  }

  get x (): number {
    return (this.dist * Math.cos(this.theta)) + (sw/2);
  }

  get y (): number {
    return this.dist * Math.sin(this.theta) + (sh/2);
  }

  // isPointInside(x: number, y: number) {
  //   return (
  //     this.x + this.w > x &&
  //     this.x          < x &&
  //     this.y + this.h > y &&
  //     this.y          < y
  //   )
  // }

  // isColliding(s: Sprite) {
  //   return (
  //     this.x + this.w > s.x       &&
  //     this.x          < s.x + s.w &&
  //     this.y + this.h > s.y       &&
  //     this.y          < s.y + s.h
  //   )
  // }

  draw(paint: Paint) {}
  update() {}
  // spriteHit() {}
}