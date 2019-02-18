import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  API_PATH = 'http://35.196.228.133:3000'

  constructor( private http: HttpClient ) { }

  requestQuot( formValue ) {

    let toBePosted: any = {
      product_id: 2,
      user_id: 1,
      quantity: formValue.quantity,
      specifications: _.omit( formValue, [ 'name', 'email', 'quantity' ] ),
    }

    toBePosted.specifications.alto = formValue.altoTotal * .8
    toBePosted.specifications.anchoCajon = formValue.ancho2 - 10 - formValue.anchoVisagra
    toBePosted.specifications.cantEntrepanos = Math.floor( ( toBePosted.specifications.alto - formValue.cantCajones * formValue.altoCajon ) / formValue.espacioEntre )
    toBePosted.specifications.largoPiso = formValue.largo - 20 - 2 * ( formValue.espesorTablas - 4 )
    toBePosted.specifications.anchoPiso = toBePosted.specifications.anchoCajon - 2 * formValue.anchoRiel - 2 * ( formValue.espesorTablas - 4 )
    toBePosted.specifications.anchoPuerta = Math.floor( ( formValue.ancho - formValue.anchoVisagra * 4 ) / 4 )
    toBePosted.specifications.altoPuerta = formValue.altoTotal - 10
    toBePosted.specifications.anchiPuerta2 = Math.floor( ( formValue.ancho - formValue.anchoVisagra * 4 ) / 2 )

    toBePosted = {
      quotation: toBePosted
    }

    console.log( toBePosted )

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post( this.API_PATH + '/quotations', toBePosted, httpOptions )
  }

}
