import { RouterModule, Routes } from '@angular/router';

import { AxisMovementComponent } from './axis-movement/axis-movement.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/axis-movement', pathMatch: 'full' },
  { path: 'axis-movement', component: AxisMovementComponent }
];
export const routes = RouterModule.forRoot(APP_ROUTES);
