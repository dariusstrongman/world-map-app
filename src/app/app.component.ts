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
  title = 'world-map-app';
  countries: any[] = [];
  selectedCountry: any = null;

  constructor(private countryApiService: CountryApiService) { }

  ngOnInit(): void {
    this.countryApiService.getAllCountries().subscribe(
      (data: any) => {
        this.countries = data.countries || [];
      },
      error => {
        console.error('Error fetching countries:', error);
      }
    );
  }

  onCountrySelected(countryCode: string) {
    this.countryApiService.getCountryInfo(countryCode).subscribe(
      (data: any) => {
        this.selectedCountry = data.country || null;
      },
      error => {
        console.error('Error fetching country info:', error);
      }
    );
  }
}
