import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiHost: string = 'https://restcountries.com/v3.1';
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byName: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  searchCountriesByName(term: string): Observable<Country[]> {
    return this.searchCountries('name', term).pipe(
      tap((countries) => (this.cacheStore.byName = { term, countries })),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchCountriesByCapital(term: string): Observable<Country[]> {
    return this.searchCountries('capital', term).pipe(
      tap((countries) => (this.cacheStore.byCapital = { term, countries })),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchCountriesByRegion(region: Region): Observable<Country[]> {
    return this.searchCountries('region', region.toString()).pipe(
      tap((countries) => (this.cacheStore.byRegion = { region, countries })),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchCountryByAlphacode(alphaCode: string): Observable<Country | null> {
    return this.searchCountries('alpha', alphaCode).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null))
    );
  }

  private searchCountries(path: string, term: string): Observable<Country[]> {
    const url: string = `${this.apiHost}/${path}/${term}`;
    return this.http.get<Country[]>(url).pipe(
      //delay(2000), // delay for testing purpose
      catchError((err) => {
        console.error('Error => ', err);
        return of([]);
      })
    );
  }
}
