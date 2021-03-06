import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './pages/landing/landing.component';
import { BasicInfoComponent } from './pages/basic-info/basic-info.component';
import { InDepthInfoComponent } from './pages/in-depth-info/in-depth-info.component';

import { AboutComponent } from './pages/about/about.component';

import { ButtonComponent } from './buttons/button/button.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BasicInfoComponent,
    InDepthInfoComponent,
    AboutComponent,
    ButtonComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
