import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { MovementService } from '../shared/services/movement/movement.service';
import { ResizeService } from '../shared/services/resize/resize.service';

@Component({
  selector: 'app-axis-movement',
  templateUrl: './axis-movement.component.html',
  styleUrls: ['./axis-movement.component.scss']
})

export class AxisMovementComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;
  private ctx: CanvasRenderingContext2D;
  public rectAttributes = {
    x: 30,
    y: 30,
    speed: 5,
    size: 50
  };
  public axis = {
    left: false,
    up: false,
    right: false,
    down: false
  };

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private movementService: MovementService,
    private resizeService: ResizeService) {
      // MOVEMENT SUBSCRIPTIONS
      movementService.goLeft.subscribe(left => this.axis.left = left);
      movementService.goUp.subscribe(up => this.axis.up = up);
      movementService.goRight.subscribe(right => this.axis.right = right);
      movementService.goDown.subscribe(down => this.axis.down = down);
   }

  ngOnInit() {
    // LISTEN KEYDOWN EVENT
    this.renderer.listen(this.canvas.nativeElement, 'keydown', (event: KeyboardEvent) => {
      this.movementService.pressArrow(event.keyCode);
    });
    // LISTEN KEYUP EVENT
    this.renderer.listen(this.canvas.nativeElement, 'keyup', (event: KeyboardEvent) => {
      this.movementService.releaseArrow(event.keyCode);
    });
    // CANVAS INIT
    this.canvasInit();
    this.resizeService.screenListener.subscribe(resize => {
      if (resize) {
        // SET CANVAS SIZE ON EVENT
        this.ctx.canvas.width = this.el.nativeElement.offsetWidth;
        this.ctx.canvas.height = this.el.nativeElement.offsetHeight;
        // REDRAW CANVAS
        this.draw();
      }
    });
    // DRAW INITAL CALL
    this.move(this.axis);
  }
  ngAfterViewInit() {
    // AUTO FOCUS TO ENABLE KEYDOWN DETECTION
    this.canvas.nativeElement.focus();
  }

  // INIT CANVAS
  canvasInit() {
    // CANVAS CONTEXT
    this.ctx = this.canvas.nativeElement.getContext('2d');
    // INITIAL CANVAS SIZE
    this.ctx.canvas.width = this.el.nativeElement.offsetWidth;
    this.ctx.canvas.height = this.el.nativeElement.offsetHeight;
  }
  // DRAW METHOD
  draw(): void {
    // DRAW RECT ON CANVAS
    this.ctx.clearRect(0, 0, this.el.nativeElement.offsetWidth, this.el.nativeElement.offsetHeight);
    this.ctx.beginPath();
    this.ctx.rect(this.rectAttributes.x, this.rectAttributes.y, this.rectAttributes.size, this.rectAttributes.size);
    this.ctx.fillStyle = 'rgb(20, 130, 255)';
    this.ctx.fill();
  }
  // UPDATE RECT POSITION
  move(axis: any): any {
    if (axis.left) {
      this.rectAttributes.x -= this.rectAttributes.speed;
    } else if (axis.right) {
      this.rectAttributes.x += this.rectAttributes.speed;
    }
    if (axis.up) {
      this.rectAttributes.y -= this.rectAttributes.speed;
    } else if (axis.down) {
      this.rectAttributes.y += this.rectAttributes.speed;
    }
    this.draw();
    requestAnimationFrame(() => {
      this.move(this.axis);
    });
  }
}
