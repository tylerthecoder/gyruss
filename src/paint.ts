import { sw, sh } from './view';

export class Paint {
  public ctx: CanvasRenderingContext2D;

  constructor(ctx:  CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  // dist is a number ranging from 1 to 100
  toCords(theta: number, dist: number, r:number) {
    const x = dist * Math.cos(theta) + sw / 2;
    const y = dist * Math.sin(theta) + sh / 2;
    const radius = ( dist / 100 ) ** 3 * r
    return { x, y, radius }
  }

  setColor() {

  }

  drawCircle(theta: number, dist: number, r: number, c: string) {
    const { x, y } = this.toCords(theta, dist, r);
    this.ctx.fillStyle = "#" + c;
    this.ctx.beginPath();
    this.ctx.arc(x, y, r ,0,2*Math.PI);
    this.ctx.fill();
  }

  drawCircleOnMap(theta: number, dist: number, r: number, c: string) {
    const { x, y, radius } = this.toCords(theta, dist, r);
    this.ctx.fillStyle = "#" + c;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius ,0,2*Math.PI);
    this.ctx.fill();
  }
}