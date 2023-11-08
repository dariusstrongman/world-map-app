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
    // Fetch all countries on initialization
    this.countryApiService.getAllCountries().subscribe(
      (data: any) => {
        // Assuming 'data' is the array of countries
        this.countries = data;
      },
      error => {
        console.error('Error fetching countries:', error);
      }
    );
  }

  onCountrySelected(countryCode: string) {
    this.countryApiService.getCountryInfo(countryCode).subscribe(
      (data: any) => {
        // Assuming 'data' is the country object
        this.selectedCountry = data;
      },
      error => {
        console.error('Error fetching country info:', error);
      }
    );
  }
  
}
