import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SvgMapComponent } from './svg-map.component';
import { CountryInfoComponent } from './country-info.component';
import { CountryApiService } from './country-api.service';
import { OtherComponent } from './other.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SvgMapComponent,
    CountryInfoComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CountryApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
