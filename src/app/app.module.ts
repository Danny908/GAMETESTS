import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AxisMovementComponent } from './axis-movement/axis-movement.component';
import { SharedModule } from './shared/shared.module';
import { routes } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    AxisMovementComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
