import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import {ReactiveFormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { NogglesComponent } from './Components/noggles/noggles.component';
import { LoginComponent } from './Components/login/login.component';
import { MeterReadingComponent } from './Components/meter-reading/meter-reading.component';
import { TopHeaderUIComponent } from './Components/ReusableUI/top-header-ui/top-header-ui.component';
import { FooterComponent } from './Components/ReusableUI/footer/footer.component';
import { LeftNavSideComponent } from './Components/ModalWindows/left-nav-side/left-nav-side.component';
import { BottemLeftNavSideComponent } from './Components/ModalWindows/bottem-left-nav-side/bottem-left-nav-side.component';
import { RightNavSideComponent } from './Components/ModalWindows/right-nav-side/right-nav-side.component';
import { PdfRendererComponent } from './Components/Reusable/pdf-renderer/pdf-renderer.component';
@NgModule({
  declarations: [
    AppComponent,
    NogglesComponent,
    LoginComponent,
    MeterReadingComponent,
    TopHeaderUIComponent,
    FooterComponent,
    LeftNavSideComponent,
    BottemLeftNavSideComponent,
    RightNavSideComponent,
    PdfRendererComponent, 
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
