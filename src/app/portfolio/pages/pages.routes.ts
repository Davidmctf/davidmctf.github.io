import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ProfileComponent } from './profile';
import { ProjectsComponent } from './projects';
import { SfdComponent } from './sfd';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'profile', component: ProfileComponent, title: 'Perfil' },
  { path: 'proyectos', component: ProjectsComponent, title: 'Proyectos' },
  {
    path: 'sfd-project',
    component: SfdComponent,
    title: 'SFD Documentation',
    //!NOTE: INCORRECTO, YA QUE COMO AQUI NO TENEMO LOGIN PODEMOS CARGAR LOC OMPOENNETES DIRECTAMENE loadComponent: () =>
    //   import('./sfd-project/sfd.component').then((m) => m.SfdV2Component),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
