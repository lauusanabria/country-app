import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public term: string = '';

  constructor(private countriesService: CountriesService) {}

  searchCountries(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCountriesByName(term).subscribe((data) => {
      this.isLoading = false;
      this.countries = data;
    });
  }

  ngOnInit(): void {
    this.term = this.countriesService.cacheStore.byName.term;
    this.countries = this.countriesService.cacheStore.byName.countries;
  }
}
