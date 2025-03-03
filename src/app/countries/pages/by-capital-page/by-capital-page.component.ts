import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public term: string = '';

  constructor(private countriesService: CountriesService) {}

  searchCountries(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCountriesByCapital(term).subscribe({
      next: (data) => {
        this.countries = data;
        this.isLoading = false;
      },
      error: () => alert('Uncaught error'),
    });
  }

  ngOnInit(): void {
    this.term = this.countriesService.cacheStore.byCapital.term;
    this.countries = this.countriesService.cacheStore.byCapital.countries;
  }
}
