import { Model } from './model';
import { Paint } from './paint';

export const sw = window.innerWidth;
export const sh = window.innerHeight;


export class View {
  private model : Model;
  private canvas: HTMLCanvasElement;
  private paint: Paint;

  constructor (model: Model) {
    this.model = model;
    this.canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    this.canvas.width = sw;
    this.canvas.height = sh;
    const ctx = this.canvas.getContext("2d");
    this.paint = new Paint(ctx);
  }

  update() {

    // clear screen
    this.paint.ctx.fillStyle="#FFFFFF";
    this.paint.ctx.fillRect(0, 0, sw, sh);

    // draw main circle
    this.paint.drawCircle(0, 0, this.model.mainCircleWidth / 2, "000000");
    // this.paint.fillStyle="#000000";
    // this.paint.beginPath();
    // this.paint.arc(sw/2,sh/2,this.model.mainCircleWidth / 2,0,2*Math.PI);
    // this.paint.fill();


    for (const sprite of this.model.sprites) {
      sprite.draw(this.paint);
    }
  }
}