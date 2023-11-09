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
        <!-- Handle the case when selectedCountry is null -->
        <app-country-info *ngIf="selectedCountry" [country]="selectedCountry"></app-country-info>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  title = 'world-map-app';
  countries: any[] = [];
  selectedCountry: any = null; // Initialize selectedCountry as null

  constructor(private countryApiService: CountryApiService) { }

  ngOnInit(): void {
    this.countryApiService.getAllCountries().subscribe(
      (data: any) => {
        // Check the structure of the data and assign accordingly
        // For example, if the countries are in data.countries:
        this.countries = data.countries || []; // Use a fallback to an empty array
      },
      error => {
        console.error('Error fetching countries:', error);
        // Implement user feedback here
      }
    );
  }

  onCountrySelected(countryCode: string) {
    this.countryApiService.getCountryInfo(countryCode).subscribe(
      (data: any) => {
        // Check the structure of the data and assign accordingly
        // For example, if the country info is in data.country:
        this.selectedCountry = data.country || null; // Use a fallback to null
      },
      error => {
        console.error('Error fetching country info:', error);
        // Implement user feedback here
      }
    );
  }
}
