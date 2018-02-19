import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementService } from './services/movement/movement.service';
import { ResizeService } from './services/resize/resize.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MovementService,
    ResizeService
  ],
  declarations: []
})
export class SharedModule { }
