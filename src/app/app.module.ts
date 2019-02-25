import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/views/about-us/about-us.component';
import { ServicesComponent } from './components/views/services/services.component';
import { ProjectsComponent } from './components/views/projects/projects.component';
import { TeamComponent } from './components/views/team/team.component';
import { ContactComponent } from './components/views/contact/contact.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NavbarWrapperComponent } from './components/views/route-wrappers/navbar-wrapper/navbar-wrapper.component';
import { LandingComponent } from './components/views/landing/landing.component';
import { AngelFurnitureComponent } from './components/views/forms/angel-furniture/angel-furniture.component';
import { MuebleTvComponent } from './components/views/forms/mueble-tv/mueble-tv.component';
import { McocinaComponent } from './components/views/forms/mcocina/mcocina.component';
import { MLinosComponent } from './components/views/forms/m-linos/m-linos.component';
import { MTv4Component } from './components/views/forms/m-tv4/m-tv4.component';
import { MBanhoComponent } from './components/views/forms/m-banho/m-banho.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ServicesComponent,
    ProjectsComponent,
    TeamComponent,
    ContactComponent,
    NavbarComponent,
    NavbarWrapperComponent,
    LandingComponent,
    AngelFurnitureComponent,
    MuebleTvComponent,
    McocinaComponent,
    MLinosComponent,
    MTv4Component,
    MBanhoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
