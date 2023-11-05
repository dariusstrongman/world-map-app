import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  private apiUrl = 'https://api.worldbank.org/v2/country'; // Base API URL

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any> {
    const url = `${this.apiUrl}/?format=json&per_page=300`; // Fetch all countries
    return this.http.get(url);
  }

  getCountryInfo(countryCode: string): Observable<any> {
    const url = `${this.apiUrl}/${countryCode}?format=json`;
    return this.http.get(url);
  }
}
