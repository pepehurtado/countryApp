import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor(public countryService : CountryService) { }

  searchRegion( capital: string ) :void {
    this.countryService.searchRegion(capital)
    .subscribe( countries => {
      this.countries = countries;
    } );
  }
}
