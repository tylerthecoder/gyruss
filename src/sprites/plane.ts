import { sw, sh } from "../view";
import { Sprite } from './sprite';
import { Bullet } from './bullet';
import { Model } from "../model";
import { Paint } from '../paint';

export class Plane extends Sprite {
  public moveSpeed = .01;
  public pressingSpace = false;

  constructor(m: Model) {
    super(100,100, m);
    this.dist = m.mainCircleWidth / 2;
  }

  update() {

  }

  draw(paint: Paint) {
    paint.ctx.fillStyle = "#ff0000";

    paint.ctx.beginPath();
    const r1 = this.dist - 40;
    const x1 = r1 * Math.cos(this.theta) + sw / 2;
    const y1 = r1 * Math.sin(this.theta) + sh / 2;
    paint.ctx.moveTo(x1, y1);

    const x2 = this.dist * Math.cos(this.theta - Math.PI / 128) + sw / 2;
    const y2 = this.dist * Math.sin(this.theta - Math.PI / 128) + sh / 2;
    paint.ctx.lineTo(x2, y2);

    const x3 = this.dist * Math.cos(this.theta + Math.PI / 128) + sw / 2;
    const y3 = this.dist * Math.sin(this.theta + Math.PI / 128) + sh / 2;
    paint.ctx.lineTo(x3, y3);

    paint.ctx.fill();
  }

  shoot() {
    if (!this.pressingSpace) {
      const bullet = new Bullet(this.model, this.theta);
      this.model.sprites.push(bullet);
    }
  }

  move(dir: number) {
    this.theta += dir * this.moveSpeed;
    this.theta %= 2 * Math.PI;
  }
}