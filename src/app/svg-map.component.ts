import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-svg-map',
  template: `
    <svg width="800" height="600">
      <!-- Loop through countries and create paths for each country -->
      <ng-container *ngFor="let country of countries">
        <path
          [attr.d]="country.path"
          [attr.fill]="country.color"
          (click)="onCountryClick(country.code)"
        ></path>
      </ng-container>
    </svg>
  `
})
export class SvgMapComponent implements OnInit {
  @Input() countries: any[] = [];
  @Output() countrySelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    // Initialize SVG map data or any other logic if needed
  }

  // Example method to handle click event on a country
  onCountryClick(countryCode: string) {
    this.countrySelected.emit(countryCode);
  }
}

