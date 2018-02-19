import { Injectable, Renderer2, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ResizeService {
  public screenListener = new BehaviorSubject(false);
  private cooldown: any;
  constructor() {
    window.addEventListener('resize', (): any => {
      this.screenListener.next(true);
      // RESIZE EVENT ENDS
      clearTimeout(this.cooldown);
       this.cooldown = setTimeout(() => { this.screenListener.next(false); }, 100);
    });
   }

}
