// svg-map.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-svg-map',
  templateUrl: './svg-map.component.html',
  styleUrls: ['./svg-map.component.css']
})
export class SvgMapComponent {
  @Input() countries!: any[]; // Non-null assertion operator
  @Output() countrySelected = new EventEmitter<string>();

  selectCountry(countryCode: string) {
    this.countrySelected.emit(countryCode);
  }
}
