import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(public countryService : CountryService) { }

  searchByCapital( capital: string ) :void {
    this.countryService.searchCapital(capital)
    .subscribe( countries => {
      this.countries = countries;
    } );
  }

}
