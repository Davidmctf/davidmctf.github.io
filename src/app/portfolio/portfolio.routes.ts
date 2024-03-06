import { Routes } from '@angular/router';
import { MainComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    loadChildren: () => import('./pages/pages.routes').then(m => m.routes),
  }
];
