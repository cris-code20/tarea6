import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

   private apiUrlSex = 'https://api.genderize.io';
   private apiUrlAge = 'https://api.agify.io';
   private apiUni = 'http://universities.hipolabs.com/search?country=';



  constructor(private http: HttpClient) {}

  getGenderByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrlSex}/?name=${name}`);
  }

  getAgeByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrlAge}/?name=${name}`);
  }

  getUniversitiesByCountry(country: string): Observable<any> {
    return this.http.get(`${this.apiUni}${country}`);
  }
}
