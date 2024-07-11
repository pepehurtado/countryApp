import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';


  constructor(private http: HttpClient) { }

  searchCountryById( id: string ) : Observable<Country | null> {
    return this.http
    .get<Country[]>(`${this.apiUrl}/alpha/${id}`)
    .pipe(
      map(countries => countries.length>0 ? countries[0] : null),
      catchError( err => of(null) )
      );
  }

  searchCapital( capital: string ) : Observable<Country[]> {
    return this.http
    .get<Country[]>(`${this.apiUrl}/capital/${capital}`)
    .pipe(
      catchError( err => of([]) )
      );
  }

  searchCountry( country: string ) : Observable<Country[]> {
    return this.http
    .get<Country[]>(`${this.apiUrl}/name/${country}`)
    .pipe(
      catchError( err => of([]) )
      );
  }

  searchRegion( region: string ) : Observable<Country[]> {
    return this.http
    .get<Country[]>(`${this.apiUrl}/region/${region}`)
    .pipe(
      catchError( err => of([]) )
      );
  }

}
