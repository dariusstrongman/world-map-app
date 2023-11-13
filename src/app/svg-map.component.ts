import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-map',
  template: `<div [innerHTML]="svgContent" (click)="onMapClick($event)"></div>`,
  styleUrls: ['./svg-map.component.css'] // Ensure this path is correct
})
export class SvgMapComponent implements OnInit {
  @Output() countrySelected = new EventEmitter<string>();
  svgContent: SafeHtml | null = null;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadSvgMap();
  }

  private loadSvgMap(): void {
    this.http.get('assets/map2.svg', { responseType: 'text' })
      .subscribe(svgData => {
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svgData);
      }, error => {
        console.error('Error loading SVG map:', error);
      });
  }

  onMapClick(event: MouseEvent): void {
    const countryCode = this.extractCountryCode(event);
    if (countryCode) {
      this.countrySelected.emit(countryCode);
    }
  }

  private extractCountryCode(event: MouseEvent): string | null {
    // Implement logic to extract country code from the clicked SVG element
    // This depends on how your SVG is structured
    // Example:
    // const target = event.target as SVGElement;
    // return target.getAttribute('data-country-code');
    return null; // Replace with actual extraction logic
  }
}
