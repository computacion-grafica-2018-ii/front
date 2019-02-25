import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/views/landing/landing.component';
import { AboutUsComponent } from './components/views/about-us/about-us.component';
import { ServicesComponent } from './components/views/services/services.component';
import { ProjectsComponent } from './components/views/projects/projects.component';
import { TeamComponent } from './components/views/team/team.component';
import { ContactComponent } from './components/views/contact/contact.component';
import { AngelFurnitureComponent } from './components/views/forms/angel-furniture/angel-furniture.component';
import { MuebleTvComponent } from './components/views/forms/mueble-tv/mueble-tv.component';
import { McocinaComponent } from './components/views/forms/mcocina/mcocina.component';
import { MLinosComponent } from './components/views/forms/m-linos/m-linos.component';
import { MTv4Component } from './components/views/forms/m-tv4/m-tv4.component';
import { MBanhoComponent } from './components/views/forms/m-banho/m-banho.component';

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
    path: 'closet',
    component: AngelFurnitureComponent
  },
  {
    path: 'mueble-closet',
    component: AngelFurnitureComponent
  },
  {
    path: 'mueble-tv',
    component: MuebleTvComponent
  },
  {
    path: 'mueble-cocina',
    component: McocinaComponent
  },
  {
    path: 'mueble-linos',
    component: MLinosComponent
  },
  {
    path: 'mueble-tv-4',
    component: MTv4Component
  },
  {
    path: 'mueble-bano',
    component: MBanhoComponent
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
