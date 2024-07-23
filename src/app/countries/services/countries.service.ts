import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';


@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiHost: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountriesByName(term: string): Observable<Country[]> {
    return this.searchCountries('name', term);
  }

  searchCountriesByCapital(term: string): Observable<Country[]> {
    return this.searchCountries('capital', term);
  }

  searchCountriesByRegion(term: string): Observable<Country[]> {
    return this.searchCountries('region', term);
  }

  searchCountryByAlphacode(alphaCode: string): Observable<Country | null> {
    return this.searchCountries('alpha', alphaCode).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null))
    );
  }

  searchCountries(path: string, term: string): Observable<Country[]> {
    const url: string = `${this.apiHost}/${path}/${term}`;
    return this.http.get<Country[]>(url).pipe(
      catchError((err) => {
        console.error('Error => ', err);
        return of([]);
      })
    );
  }
}
