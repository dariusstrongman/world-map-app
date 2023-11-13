import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  private apiUrl = 'https://api.worldbank.org/v2/country';

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all?format=json`);
  }

  getCountryInfo(countryCode: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${countryCode}?format=json`);
  }
}
