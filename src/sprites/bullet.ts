import { sw, sh } from "../view";
import { Sprite } from './sprite';
import { Model } from '../model';
import { Paint } from '../paint';

export class Bullet extends Sprite {
  public length: number = 30;
  public bullR: number = 10;
  private bulletSpeed = 4;

  constructor(m: Model, theta: number) {
    super(0,0, m);
    this.w = 9;
    this.theta = theta;
    this.dist = m.mainCircleWidth / 2;
  }

  update() {
    this.dist -= this.bulletSpeed;
    this.length = this.dist / 10
    if (this.dist < 0) {
      this.model.removeSprite(this);
    }
  }

  draw(paint: Paint) {
    paint.ctx.fillStyle = "#ff0000";
    paint.ctx.beginPath();
    const r1 = this.dist - this.length;
    const x1 = r1 * Math.cos(this.theta - Math.PI / 512) + sw / 2;
    const y1 = r1 * Math.sin(this.theta - Math.PI / 512) + sh / 2;
    paint.ctx.moveTo(x1, y1);

    const x2 = r1 * Math.cos(this.theta + Math.PI / 512) + sw / 2;
    const y2 = r1 * Math.sin(this.theta + Math.PI / 512) + sh / 2;
    paint.ctx.lineTo(x2, y2);

    const x4 = this.dist * Math.cos(this.theta + Math.PI / 512) + sw / 2;
    const y4 = this.dist * Math.sin(this.theta + Math.PI / 512) + sh / 2;
    paint.ctx.lineTo(x4, y4);

    const x3 = this.dist * Math.cos(this.theta - Math.PI / 512) + sw / 2;
    const y3 = this.dist * Math.sin(this.theta - Math.PI / 512) + sh / 2;
    paint.ctx.lineTo(x3, y3);

    paint.ctx.fill();
  }
}