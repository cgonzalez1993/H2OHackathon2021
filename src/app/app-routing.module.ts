import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';


import { BasicInfoComponent } from './pages/basic-info/basic-info.component';
import { InDepthInfoComponent } from './pages/in-depth-info/in-depth-info.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'basicinfo', component: BasicInfoComponent},
  { path: 'indepthinfo', component: InDepthInfoComponent},
  {path: 'about', component:AboutComponent},
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
