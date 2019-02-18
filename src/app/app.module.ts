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
import { TestFurnitureComponent } from './components/views/forms/test-furniture/test-furniture.component';

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
    TestFurnitureComponent
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
