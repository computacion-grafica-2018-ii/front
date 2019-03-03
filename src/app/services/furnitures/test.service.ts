import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  API_PATH = 'http://35.196.228.133:3000'

  constructor( private http: HttpClient ) { }

  closetQuot( formValue ) {

    let toBePosted: any = {
      product_id: 1,
      name: formValue.name,
      email: formValue.email,
      quantity: 1,
      specifications: _.omit( formValue, [ 'name', 'email', 'quantity' ] ),
    }

    toBePosted.specifications.alto = formValue.altoTotal * .8
    toBePosted.specifications.anchoCajon = formValue.ancho2 - 10 - formValue.anchoVisagra
    toBePosted.specifications.cantEntrepanos = Math.floor( ( toBePosted.specifications.alto - formValue.cantCajones * formValue.altoCajon ) / formValue.espacioEntre )
    toBePosted.specifications.largoPiso = formValue.largo - 20 - 2 * ( formValue.espesorTablas - 4 )
    toBePosted.specifications.anchoPiso = toBePosted.specifications.anchoCajon - 2 * formValue.anchoRiel - 2 * ( formValue.espesorTablas - 4 )
    toBePosted.specifications.anchoPuerta = Math.floor( ( formValue.ancho - formValue.anchoVisagra * 4 ) / 4 )
    toBePosted.specifications.altoPuerta = formValue.altoTotal - 35
    toBePosted.specifications.anchoPuerta2 = Math.floor( ( formValue.ancho - formValue.anchoVisagra * 2 ) / 2 )

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

  muebleTv( formValue ) {
    let toBePosted: any = {
      product_id: 3,
      quantity: 1,
      name: formValue.name,
      email: formValue.email,
      specifications: _.omit( formValue, [ 'name', 'email', 'quantity' ] ),
    }

    toBePosted.specifications.Largo_TS = formValue.Ancho,
    toBePosted.specifications.Profundidad_TS = formValue.Profundidad,
    toBePosted.specifications.Largo_Em = formValue.Ancho,
    toBePosted.specifications.Alto_SV = formValue.Alto - 40,
    toBePosted.specifications.Profundidad_SV = formValue.Profundidad - 60,
    toBePosted.specifications.Alto_SVM = formValue.Alto - 40,
    toBePosted.specifications.Profundidad_SVM = formValue.Profundidad - 60,
    toBePosted.specifications.Alto_SH = ( formValue.Alto - 40 ) * .15,
    toBePosted.specifications.Ancho_SH = formValue.Ancho - 208,
    toBePosted.specifications.Ancho_TI = formValue.Ancho - 168,
    toBePosted.specifications.Profundidad_TI = formValue.Profundidad - 60,
    toBePosted.specifications.Ancho_EnI = (formValue.Ancho - 268 ) / 3,
    toBePosted.specifications.Profundidad_EnI = formValue.Profundidad - 100,
    toBePosted.specifications.Ancho_EnD = ( formValue.Ancho - 208 ) * 2 / 3,
    toBePosted.specifications.Profundidad_EnD = formValue.Profundidad - 100,
    toBePosted.specifications.Alto_Pt = ( formValue.Alto - 40 ) * .85,
    toBePosted.specifications.Ancho_Pt = ( formValue.Ancho - 208 ) / 3,
    toBePosted.specifications.Alto_SpI = 100,
    toBePosted.specifications.Ancho_SpI = toBePosted.specifications.Ancho_EnI,
    toBePosted.specifications.Alto_SpD = 100,
    toBePosted.specifications.Ancho_SpD = toBePosted.specifications.Ancho_EnD,
    toBePosted.specifications.Dp1_tmf_TS = 70,
    toBePosted.specifications.Dp2_tmf_TS = 50,
    toBePosted.specifications.Dp3_tmf_TS = formValue.Profundidad - 110,
    toBePosted.specifications.Da1_tmf_TS = ( formValue.Ancho - 268 ) / 3 + 114,

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

  muebleCocina( formValue ) {
    let toBePosted: any = {
      product_id: 4,
      user_id: 1,
      quantity: 1,
      specifications: _.omit( formValue, [ 'name', 'email', 'quantity' ] ),
    }

    toBePosted.specifications.Altura_Soporte_H = formValue.Largo_Total - 40
    toBePosted.specifications.Largo_Soporte_H = formValue.Ancho_Total - 20
    toBePosted.specifications.Ancho_Soporte_H = 20
    toBePosted.specifications.Altura_Soporte_V = formValue.Altura_Total
    toBePosted.specifications.Largo_Soporte_V = toBePosted.specifications.Largo_Soporte_H
    toBePosted.specifications.Ancho_Soporte_V = 20
    toBePosted.specifications.Altura_Soporte_V2 = toBePosted.specifications.Altura_Soporte_V - 40
    toBePosted.specifications.Largo_Soporte_V2 = toBePosted.specifications.Largo_Soporte_V
    toBePosted.specifications.Ancho_Soporte_V2 = 20
    toBePosted.specifications.Altura_Entrepaño = ( toBePosted.specifications.Altura_Soporte_H - 20 ) / 2
    toBePosted.specifications.Largo_Entrepaño = toBePosted.specifications.Largo_Soporte_H
    toBePosted.specifications.Ancho_Entrepaño = 20
    toBePosted.specifications.Altura_Puerta = formValue.Altura_Total
    toBePosted.specifications.Largo_Puerta = toBePosted.specifications.Largo_Soporte_H - 4
    toBePosted.specifications.Ancho_Puerta = 20
    toBePosted.specifications.Altura_Refuerzo = toBePosted.specifications.Altura_Soporte_V / 5
    toBePosted.specifications.Largo_Refuerzo = toBePosted.specifications.Largo_Soporte_V
    toBePosted.specifications.Ancho_Refuerzo = 20
    toBePosted.specifications.Altura_Tapa = formValue.Altura_Total
    toBePosted.specifications.Largo_Tapa = toBePosted.specifications.Altura_Soporte_H + 40
    toBePosted.specifications.Ancho_Tapa = 5
    toBePosted.specifications.Separación_Topes_V = 80
    toBePosted.specifications.Cantidad_Modulos = formValue.Cantidad_Compartimentos - 2

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

  muebleLinos( formValue ) {
    let toBePosted: any = {
      product_id: 2,
      name: formValue.name,
      email: formValue.email,
      quantity: 1,
      specifications: _.omit( formValue, [ 'name', 'email', 'quantity' ] ),
    }

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

  muebleTv4( formValue ) {
    let toBePosted: any = {
      name: formValue.name,
      email: formValue.email,
      product_id: 4,
      quantity: 1,
      specifications: _.omit( formValue, [ 'name', 'email', 'quantity' ] ),
    }

    toBePosted.specifications.Ancho_TS = formValue.ancho
    toBePosted.specifications.Profundidad_TS = formValue.profundidad
    toBePosted.specifications.Ancho_Em = formValue.ancho
    toBePosted.specifications.Alto_SV = formValue.alto - 40
    toBePosted.specifications.Profundidad_SV = Math.floor( formValue.profundidad * .8484 )
    toBePosted.specifications.Alto_SVM = toBePosted.specifications.Alto_SV
    toBePosted.specifications.Profundidad_SVM = toBePosted.specifications.Profundidad_SV - 20
    toBePosted.specifications.Alto_SH = Math.floor( toBePosted.specifications.Alto_SV * .2247 )
    toBePosted.specifications.A_Lo_Largo = Math.floor( toBePosted.specifications.Ancho_TS * .04 )
    toBePosted.specifications.Ancho_SH = toBePosted.specifications.Ancho_TS - ( 40 + 2 * toBePosted.specifications.A_Lo_Largo )
    toBePosted.specifications.Ancho_TI = toBePosted.specifications.Ancho_SH + 40
    toBePosted.specifications.Profundidad_TI = toBePosted.specifications.Profundidad_SV
    toBePosted.specifications.Ancho_En = ( toBePosted.specifications.Ancho_TI / 2 ) - 30
    toBePosted.specifications.Profundidad_En = Math.floor( toBePosted.specifications.Profundidad_SV * .8214 )
    toBePosted.specifications.Alto_Pt = toBePosted.specifications.Alto_SV - toBePosted.specifications.Alto_SH + 40
    toBePosted.specifications.Ancho_Sp = toBePosted.specifications.Ancho_SH / 2 - 10
    toBePosted.specifications.Ancho_Pt = Math.floor( 5 + toBePosted.specifications.Ancho_Sp / 2 - 2.5 )
    toBePosted.specifications.Alto_Sp = toBePosted.specifications.Alto_SH
    toBePosted.specifications.A_Lo_Ancho = Math.floor( toBePosted.specifications.Profundidad_TS / 2 - toBePosted.specifications.Profundidad_TS * .143 )
    toBePosted.specifications.Entrepanos = Math.floor( ( toBePosted.specifications.Alto_SV - toBePosted.specifications.Alto_SH ) / 2 - 10 )

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

  muebleBanho( formValue ) {
    let toBePosted: any = {
      product_id: 5,
      name: formValue.name,
      email: formValue.email,
      quantity: 1,
      specifications: _.omit( formValue, [ 'name', 'email', 'quantity' ] ),
    }

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
