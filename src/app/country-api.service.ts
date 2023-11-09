import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  private apiUrl = 'https://api.worldbank.org/v2/country'; // Base API URL

  constructor(private http: HttpClient) { }

  // Method to fetch all countries
  getAllCountries(): Observable<any> {
    // You might need to adjust the URL based on the API's requirements
    const url = `${this.apiUrl}/all?format=json`;
    return this.http.get(url);
  }

  // Method to fetch detailed information for a selected country
  getCountryInfo(countryCode: string): Observable<any> {
    // You might need to adjust the URL based on the API's requirements
    const url = `${this.apiUrl}/${countryCode}?format=json`;
    return this.http.get(url);
  }
}
