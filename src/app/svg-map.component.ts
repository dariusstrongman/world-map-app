import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-map',
  templateUrl: './svg-map.component.html',
  styleUrls: ['./svg-map.component.css']
})
export class SvgMapComponent implements OnInit {
  svgContent: SafeHtml | null = null;

  @Output() countrySelected = new EventEmitter<string>(); // Define the EventEmitter

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.http.get('assets/SVG map.svg', { responseType: 'text' })
      .subscribe(svg => {
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svg);
      });
  }

  selectCountry(countryCode: string) {
    this.countrySelected.emit(countryCode); // Emit the selected country code
  }
}
