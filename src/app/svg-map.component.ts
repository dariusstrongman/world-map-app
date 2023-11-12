import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-map',
  template: `<div [innerHTML]="svgContent" (click)="onMapClick($event)"></div>`,
  styleUrls: ['./svg-map.component.css'] // Update the path if necessary
})
export class SvgMapComponent implements OnInit {
  @Input() countries: any[] = [];
  @Output() countrySelected = new EventEmitter<string>();
  svgContent: SafeHtml | null = null;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadSvgMap();
  }

  private loadSvgMap(): void {
    this.http.get('path/to/your/svg-map.svg', { responseType: 'text' })
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
    return null; // Replace with actual extraction logic
  }
}
