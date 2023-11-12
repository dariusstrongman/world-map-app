import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  private apiUrl = 'https://api.worldbank.org/v2/country'; // Base API URL

  constructor(private http: HttpClient) { }

  // Method to fetch all countries
  getAllCountries(): Observable<any> {
    const url = `${this.apiUrl}/all?format=json`;
    return this.http.get(url).pipe(
      map(response => this.extractData(response)),
      catchError(this.handleError)
    );
  }

  // Method to fetch detailed information for a selected country
  getCountryInfo(countryCode: string): Observable<any> {
    const url = `${this.apiUrl}/${countryCode}?format=json`;
    return this.http.get(url).pipe(
      map(response => this.extractData(response)),
      catchError(this.handleError)
    );
  }

  // Helper method to extract data from the response
  private extractData(response: any) {
    // Adjust this based on the actual response structure
    return response[1];
  }

  // Error handling method
  private handleError(error: any) {
    // Implement error handling logic
    // For example, log the error or display a message
    console.error('An error occurred:', error);
    return throwError(error);
  }
}

