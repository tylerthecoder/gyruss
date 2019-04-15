import { Sprite } from '../sprite';
import { Model } from '../../model';
import { Paint } from '../../paint';

export default class Cello extends Sprite {
  private r: number;
  private state: number;

  constructor(m: Model) {
    super(0,0, m);
    this.dist = 20;
    this.r = 3;
    this.state = 0;
  }

  draw(paint: Paint) {
    paint.drawCircleOnMap(this.theta, this.dist, this.r, "00ff00");
  }

  update() {
    if (this.state == 0) {
      this.dist += 1;
      if (this.dist > this.model.mainCircleWidth / 4) {
        this.state = 1;
      }
    } else if (this.state == 1) {
      this.theta += .005;
    }
  }
}