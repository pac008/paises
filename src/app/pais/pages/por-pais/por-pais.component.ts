import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Country } from '../../interfaces/por-pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent{

  termino: string = ''
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  mostrarSugerencias: boolean = false;
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
    this.mostrarSugerencias = true
    this.termino = termino
    // TODO: Crear sugerencias
    this.paisService.buscarPais( termino )
      .subscribe( paises => {
        if ( paises.length) {
          this.paisesSugeridos = paises.splice(0,5)
        } 
      })
  }

  buscarSugerencias( termino: string ) {
    this.mostrarSugerencias = false;
    this.buscar( termino )

  }
}
