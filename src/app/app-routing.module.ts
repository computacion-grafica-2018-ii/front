import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/views/landing/landing.component';
import { AboutUsComponent } from './components/views/about-us/about-us.component';
import { ServicesComponent } from './components/views/services/services.component';
import { ProjectsComponent } from './components/views/projects/projects.component';
import { TeamComponent } from './components/views/team/team.component';
import { ContactComponent } from './components/views/contact/contact.component';
import { TestFurnitureComponent } from './components/views/forms/test-furniture/test-furniture.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: LandingComponent
  },
  {
    path: 'nosotros',
    component: AboutUsComponent
  },
  {
    path: 'servicios',
    component: ServicesComponent
  },
  {
    path: 'proyectos',
    component: ProjectsComponent
  },
  {
    path: 'equipo',
    component: TeamComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: 'mueble-test',
    component: TestFurnitureComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
