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
    this.countryApiService.getAllCountries().subscribe(
      data => {
        console.log('Countries data:', data); // Debugging line
        this.countries = data[1];
      },
      error => console.error('Error fetching countries:', error) // Error handling
    );
  }

  onCountrySelected(countryCode: string) {
    this.countryApiService.getCountryInfo(countryCode).subscribe(
      data => {
        console.log('Selected country data:', data); // Debugging line
        this.selectedCountry = data[1][0]; // Assuming the country data is in the second element of the response array
      },
      error => console.error('Error fetching country info:', error) // Error handling
    );
  }
}
