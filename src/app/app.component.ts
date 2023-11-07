import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries = []; // This should be populated with the actual country data
  selectedCountry: any = null; // This will hold the data for the selected country

  onCountrySelected(countryCode: string): void {
    // Here you would find the country data based on the selected countryCode
    // For example:
    this.selectedCountry = this.countries.find(country => country.code === countryCode);
  }
}
