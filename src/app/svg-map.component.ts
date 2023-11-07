import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg-map',
  templateUrl: './svg-map.component.html',
  styleUrls: ['./svg-map.component.css']
})
export class SvgMapComponent implements OnInit {
  @Input() countries: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }
}
