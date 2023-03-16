import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { HeaderStatsComponent } from './Components/header-stats/header-stats.component';
import { UsersComponent } from './Components/users/users.component';
import { MainDashboardComponent } from './Components/main-dashboard/main-dashboard.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import {ReactiveFormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { NogglesComponent } from './Components/noggles/noggles.component';
import { LoginComponent } from './Components/login/login.component';
import { MeterReadingComponent } from './Components/meter-reading/meter-reading.component';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderStatsComponent,
    UsersComponent,
    MainDashboardComponent,
    NavbarComponent,
    NogglesComponent,
    LoginComponent,
    MeterReadingComponent,

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
