import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-svg-map',
  templateUrl: './svg-map.component.html',
  styleUrls: ['./svg-map.component.css']
})
export class SvgMapComponent {
  @Input() countries: any[] = [];
  @Output() countrySelected: EventEmitter<string> = new EventEmitter<string>();

  onMouseOver(countryCode: string): void {
    // Handle mouse over event
  }

  onMouseOut(countryCode: string): void {
    // Handle mouse out event
  }

  onClick(countryCode: string): void {
    this.countrySelected.emit(countryCode);
  }
}
