import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {



  public countries: Country[] = [];

  constructor(public countryService : CountryService) { }

  searchCountry( capital: string ) :void {
    this.countryService.searchCountry(capital)
    .subscribe( countries => {
      this.countries = countries;
    } );
  }
}
