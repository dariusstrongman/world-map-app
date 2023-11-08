import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SvgMapComponent } from './svg-map.component'; // Corrected path
import { CountryInfoComponent } from './country-info.component'; // Corrected path
import { CountryApiService } from './country-api.service';
// Removed OtherComponent import as it might not be used

@NgModule({
  declarations: [
    AppComponent,
    SvgMapComponent,
    CountryInfoComponent,
    // OtherComponent removed if not used
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CountryApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
