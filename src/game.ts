import { View } from './view';
import { Model } from './model';
import { Controller } from './controller';

class Game {
  private model : Model;
  private view: View;
  private controller: Controller;
  private clock: number;

  constructor () {
    this.model = new Model();
    this.view = new View(this.model);
    this.controller = new Controller(this.model);
    window.onload = this.start.bind(this);
  }

  start() {
    this.clock = window.setInterval(this.loop.bind(this), 10);
  }

  loop() {
    this.model.update();
    this.view.update();
    this.controller.update();
  }

  stop() {
    window.clearInterval(this.clock);
  }
}

const game = new Game();