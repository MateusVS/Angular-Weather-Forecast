import { Routes } from '@angular/router';
import { WheaterHomeComponent } from './modules/wheater/page/wheater-home/wheater-home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full',
  },
  {
    path: 'weather',
    component: WheaterHomeComponent,
  }
];
