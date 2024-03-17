import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ProfileComponent } from './profile';

export const routes: Routes = [
  {path: '',        component: HomeComponent },
  {path: 'home',    component: HomeComponent, title: "Home"},
  {path: 'profile', component: ProfileComponent, title: "Perfil"},
  {path: '**',      redirectTo: '', pathMatch: 'full'}
];
