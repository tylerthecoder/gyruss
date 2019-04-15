import { Star } from "./star";
import { Sprite } from "./sprite"
import { Model } from "../model";
import { Paint } from '../paint';

export class Stars extends Sprite {
  private stars: Star[] = [];
  constructor(m: Model) {
    super(0,0,m);
  }

  update() {
    for (const star of this.stars) {
      star.update();
      if (star.killMe) {
        this.removeStar(star);
      }
    }
    this.addStar();
  }

  removeStar(s: Star) {
    this.stars = this.stars.filter(star => star != s);
  }

  addStar() {
    const angle = Math.random() * Math.PI * 2;
    const star = new Star(this.model, angle);
    this.stars.push(star);
  }


  draw(paint: Paint) {
    for (const star of this.stars) {
      star.draw(paint);
    }
  }

}