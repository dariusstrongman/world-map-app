import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  private apiUrl = 'YOUR_API_ENDPOINT'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
