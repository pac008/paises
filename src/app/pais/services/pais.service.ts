import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/por-pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  get params () {
    return new HttpParams()
    .set('fields', 'name,capital,flag,alpha2Code')
  }
  constructor(private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`
    return this.http.get<Country[]> ( url, { params: this.params } );
        // .pipe(
        //   catchError( err => of(["Hola"]) )
        // )
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`
    return this.http.get<Country[]> ( url, { params: this.params } );
  }

  buscarPaisPorCode( termino: string ): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ termino }`
    return this.http.get<Country> ( url,  );
  }

  buscarPaisesPorRegion( termino: string ): Observable<Country[]> {
    

    const url = `${ this.apiUrl }/regionalbloc/${ termino }` 
    return this.http.get<Country[]> ( url, { params: this.params } )
      .pipe(
        tap( console.log)
      )
  }


}
