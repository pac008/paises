import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/por-pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {
  paises: Country[] = [];
  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC']
  regionActiva: string = '';
  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

  getClaseCSS ( region: string) :string {
    return ( this.regionActiva === region ) ? 'btn btn-primary mr-1' : 'btn btn-outline-primary mr-1' 
  }

  activarRegion( region: string) {
    if ( region == this.regionActiva) { return; }
    this.regionActiva = region
    this.paisService.buscarPaisesPorRegion( region)
    .subscribe( paises => this.paises = paises )
  }
}
