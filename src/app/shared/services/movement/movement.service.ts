import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MovementService {
  public goLeft = new BehaviorSubject(false);
  public goRight = new BehaviorSubject(false);
  public goUp = new BehaviorSubject(false);
  public goDown = new BehaviorSubject(false);

  constructor() { }
  pressArrow(keycode: number): void {
    switch (keycode) {
      // ASDW & ARROW KEYS
      case 65:
        this.goLeft.next(true);
        break;
      case 87:
        this.goUp.next(true);
        break;
      case 68:
        this.goRight.next(true);
        break;
      case 83:
        this.goDown.next(true);
        break;
      case 37:
        this.goLeft.next(true);
        break;
      case 38:
        this.goUp.next(true);
        break;
      case 39:
        this.goRight.next(true);
        break;
      case 40:
        this.goDown.next(true);
        break;
    }
  }
  // RELEASE ARROW KEY
  releaseArrow(keycode: number): void {
    switch (keycode) {
      // ASDW & ARROW KEYS
      case 65:
        this.goLeft.next(false);
        break;
      case 87:
        this.goUp.next(false);
        break;
      case 68:
        this.goRight.next(false);
        break;
      case 83:
        this.goDown.next(false);
        break;
      case 37:
        this.goLeft.next(false);
        break;
      case 38:
        this.goUp.next(false);
        break;
      case 39:
        this.goRight.next(false);
        break;
      case 40:
        this.goDown.next(false);
        break;
    }
  }
}
