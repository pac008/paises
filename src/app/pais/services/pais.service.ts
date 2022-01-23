import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/por-pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';
  constructor(private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`
    return this.http.get<Country[]> ( url );
        // .pipe(
        //   catchError( err => of(["Hola"]) )
        // )
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`
    return this.http.get<Country[]> ( url );
  }

  buscarPaisPorCode( termino: string ): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ termino }`
    return this.http.get<Country> ( url );
  }


}
