import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-info',
  template: `
    <div *ngIf="country">
      <h2>{{ country.name }}</h2>
      <p>Capital: {{ country.capital }}</p>
      <p>Region: {{ country.region }}</p>
      <p>Income Level: {{ country.incomeLevel }}</p>
      <!-- Add more properties as needed -->
    </div>
  `
})
export class CountryInfoComponent {
  @Input() country: any;
}
