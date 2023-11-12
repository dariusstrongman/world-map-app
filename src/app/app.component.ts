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
        <app-country-info *ngIf="selectedCountry" [country]="selectedCountry"></app-country-info>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  countries: any[] = [];
  selectedCountry: any = null;

  constructor(private countryApiService: CountryApiService) { }

  ngOnInit(): void {
    this.countryApiService.getAllCountries().subscribe(
      data => {
        this.countries = data; // Assuming data is an array of countries
      },
      error => console.error('Error fetching countries:', error)
    );
  }

  onCountrySelected(countryCode: string): void {
    this.countryApiService.getCountryInfo(countryCode).subscribe(
      data => {
        this.selectedCountry = data; // Assuming data is the country info
      },
      error => console.error('Error fetching country info:', error)
    );
  }
}

