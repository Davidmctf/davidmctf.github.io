import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ProfileComponent } from './profile';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'profile', component: ProfileComponent, title: 'Perfil' },
  { path: 'proyectos', component: ProjectsComponent, title: 'Proyectos' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
