import { Sprite } from "./sprite";
import { Model } from "../model";
import { Paint } from '../paint';

export class Star extends Sprite {
  private moveSpeed: number = 1;
  public killMe: boolean = false;
  private starRadius: number = 2;

  constructor(m: Model, theta: number) {
    super(0,0,m);
    this.theta = theta;
    this.moveSpeed *= .5 + Math.random() * 2;
    this.dist = 30 + Math.random() * 40;
  }

  update() {
    this.dist += this.moveSpeed;
    this.moveSpeed += .3;
    this.starRadius += .05;
    if (this.dist > this.model.mainCircleWidth / 2) {
      this.killMe = true;
    }
  }

  draw(paint: Paint) {
    paint.drawCircle(this.theta, this.dist, this.starRadius, "ffffff")
  }

}