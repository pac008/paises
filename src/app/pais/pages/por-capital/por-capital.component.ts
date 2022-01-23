import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/por-pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = ''
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService ) { }
  
  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino

    this.paisService.buscarCapital( termino )
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
