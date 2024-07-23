import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchCountries(term: string): void {
    this.countriesService.searchCountriesByCapital(term).subscribe({
      next: (data) => (this.countries = data),
      error: () => alert('Uncaught error'),
    });
  }
}
