import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { MainDashboardComponent } from './Components/main-dashboard/main-dashboard.component';
import { MeterReadingComponent } from './Components/meter-reading/meter-reading.component';
import { NogglesComponent } from './Components/noggles/noggles.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"nozle",
    component:NogglesComponent
  },
  {
    path:"meter",
    component:MeterReadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
