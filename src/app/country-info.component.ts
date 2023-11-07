import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  //styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent {
  @Input() country: any; // This will receive the country data to display

  // Rest of the component logic...
}
