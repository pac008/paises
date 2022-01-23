import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Country } from '../../interfaces/por-pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino: string = ''
  hayError: boolean = false;
  paises: Country[] = [];
  constructor(private paisService: PaisService) { }
  
  // private apiUrl: string = 'https://restcountries.eu/rest/v2';
  
  //private apiUrl: string = 'https://restcountries.com/v2';
  
  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino

    this.paisService.buscarPais( termino )
    .subscribe( paises => {
        this.paises = paises
        if ( !this.paises.length) {
          this.hayError = true
        }
  });
  }

  sugerencias( termino: string ) {
    this.hayError = false;
    // TODO: Crear sugerencias
  }
}
