import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-map',
  template: `<div [innerHTML]="svgContent" (click)="onMapClick($event)"></div>`
})
export class SvgMapComponent implements OnInit {
  @Input() countries: any[]; // Array of countries
  @Output() countrySelected = new EventEmitter<string>();
  svgContent: SafeHtml | null = null;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.http.get('assets/SVG map.svg', { responseType: 'text' })
      .subscribe(svg => {
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svg);
      });
  }

  onMapClick(event: MouseEvent): void {
    const countryCode = this.extractCountryCode(event);
    if (countryCode) {
      this.countrySelected.emit(countryCode);
    }
  }

  private extractCountryCode(event: MouseEvent): string | null {
    // Logic to extract country code from the clicked SVG element
    // This depends on how your SVG is structured
    return null;
  }
}
