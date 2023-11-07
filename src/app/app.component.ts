import { Component, OnInit } from '@angular/core';
import { CountryApiService } from './country-api.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="columns">
      <div class="column">
        <app-svg-map [countries]="countries" (countrySelected)="onCountrySelected($event)"></app-svg-map>
      </div>
      <div class="column">
        <app-country-info [country]="selectedCountry"></app-country-info>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  title = 'world-map-app';
  countries: any[] = [];
  selectedCountry: any;

  constructor(private countryApiService: CountryApiService) { }

  ngOnInit(): void {
    this.countryApiService.getAllCountries().subscribe(data => {
      // Adjust this according to the actual data structure of your API response
      this.countries = data;
    });
  }

  onCountrySelected(countryCode: string) {
    // Adjust this according to the actual data structure of your API response
    this.countryApiService.getCountryInfo(countryCode).subscribe(data => {
      this.selectedCountry = data;
    });
  }
}
