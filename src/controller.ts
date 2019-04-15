import { Model } from './model';

export class Controller {
  private model: Model;
  private keys: Set<string>;


  constructor(m: Model) {
    this.model = m;
    this.keys = new Set();
    document.addEventListener("keydown", this.keyPressed.bind(this));
    document.addEventListener("keyup", this.keyReleased.bind(this));
  }

  update () {
      if (this.keys.has("ArrowRight")) {
       this.model.plane.move(1);
      } else if (this.keys.has("ArrowLeft")) {
        this.model.plane.move(-1);
      } else {
        // this.model.mario.vx = 0;
      }

      if (this.keys.has(" ")) {
        this.model.plane.shoot();
        this.model.plane.pressingSpace = true;
      }
  }

  keyPressed(event: KeyboardEvent) {
    this.keys.add(event.key);
	}

	keyReleased(event: KeyboardEvent) {
    this.keys.delete(event.key);
    if (event.key == " ") {
      this.model.plane.pressingSpace = false;
    }
	}
}