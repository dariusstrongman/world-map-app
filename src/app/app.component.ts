import { Component, OnInit } from '@angular/core';
import { CountryApiService } from './country-api.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="columns">
      <div class="column">
        <app-svg-map (countrySelected)="onCountrySelected($event)"></app-svg-map>
      </div>
      <div class="column">
        <app-country-info *ngIf="selectedCountry" [country]="selectedCountry"></app-country-info>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  selectedCountry: any = null;
  title = 'world-map-app';

  constructor(private countryApiService: CountryApiService) { }

  ngOnInit(): void {
    // If you need to fetch all countries at the start, uncomment the following:
    /*
    this.countryApiService.getAllCountries().subscribe(
      data => {
        // Process the data as needed
      },
      error => console.error('Error fetching countries:', error)
    );
    */
  }

  onCountrySelected(countryCode: string): void {
    this.countryApiService.getCountryInfo(countryCode).subscribe(
      data => {
        this.selectedCountry = data; // Adjust based on the actual data structure
      },
      error => console.error('Error fetching country info:', error)
    );
  }
}
