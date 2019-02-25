import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { TestService } from 'src/app/services/furnitures/test.service';
import { AlertService } from 'src/app/services/alert-service/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-banho',
  templateUrl: './m-banho.component.html',
  styleUrls: ['./m-banho.component.scss']
})
export class MBanhoComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl( null, [ Validators.required ] ),
    email: new FormControl( null, [ Validators.required ] ),

    quantity: new FormControl( 1, [ Validators.required ] ),

    Ancho: new FormControl( 600, [ Validators.required, Validators.min( 500 ) ] ),
    Largo: new FormControl( 1500, [ Validators.required, Validators.min( 800 ) ] ),
    Alto: new FormControl( 1000, [ Validators.required, Validators.min( 1000 ) ] ),
    Alto_Puerta: new FormControl( 450, [ Validators.required, Validators.min( 400 ) ] ),
    Largo_PD: new FormControl( 300, [ Validators.required ] ),
    Largo_PI: new FormControl( 300, [ Validators.required ] ),
    Alto_Cajones: new FormControl( 200, [ Validators.required, Validators.min( 200 ) ] ),

    Espesor: new FormControl( 20, [ Validators.required ] ),
    Esp_Lam: new FormControl( 2, [ Validators.required ] ),
    PrecioMadera20: new FormControl( 128000, [ Validators.required ] ),
    PrecioMAdera2: new FormControl( 10000, [ Validators.required ] ),
    TornillosMinifix: new FormControl( 100, [ Validators.required ] ),
    Minifix: new FormControl( 100, [ Validators.required ] ),
    Puntillas10mm: new FormControl( 50, [ Validators.required ] ),
    Grifos: new FormControl( 20000, [ Validators.required ] ),
    Lavamanos: new FormControl( 200000, [ Validators.required ] ),
    Cifon: new FormControl( 10000, [ Validators.required ] ),
    Botones: new FormControl( 2000, [ Validators.required ] ),
    Correderas: new FormControl( 15000, [ Validators.required ] ),
    Bisagras: new FormControl( 6000, [ Validators.required ] ),

    Cotizacion: new FormControl( Math.floor( Math.random( ) * 10000 ), [ Validators.required ] ),
  })

  constructor( private testService: TestService, private alertService: AlertService, private router: Router ) { }

  ngOnInit( ) {
  }

  customValidators( AC: AbstractControl ) {
    let Height = AC.get( 'Height' ).value
    let NumSpacesL = AC.get( 'NumSpacesL' ).value
    let NumSpacesR = AC.get( 'NumSpacesR' ).value * .8

    if ( Height / NumSpacesL < 300 ) {
      AC.get( 'NumSpacesL' ).setErrors({
          error: true
      })
    } else if ( Height / NumSpacesR < 300 ) {
      AC.get( 'NumSpacesR' ).setErrors({
          error: true
      })
    } else {
      return null
    }
}

  inputErrorHandler( name ) {
    switch ( name ) {
      case 'name':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'email':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'quantity':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'Ancho':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'min' ) )
          return 'Mínimo 500'
      case 'Largo':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'min' ) )
          return 'Mínimo 800'
      case 'Alto':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'min' ) )
          return 'Mínimo 1000'
      case 'Alto_Puerta':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'min' ) )
          return 'Mínimo 400'
        else if ( this.form.get( name ).hasError( 'error' ) )
          return 'No es posible'
      case 'Largo_PD':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'error' ) )
          return 'No es posible'
      case 'Largo_PI':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'Alto_Cajones':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'min' ) )
          return 'Mínimo 200'
    }

    return 'none'
  }

  sendRequest( ) {
    if ( this.form.valid ) {
      this.alertService.showSwal( 'loading' )
      this.testService.muebleBanho( this.form.value ).subscribe(
        res => {

        },
        err => {
          console.log( err )
          this.alertService.closeSwal( )
        },
        () => {
          this.alertService.showSuccessMessageSwal(
            `En hora buena ${ this.form.get( 'name' ).value }
            Su cotización está en proceso`
          ).then( () => {
            this.router.navigate( [ 'proyectos' ] )
          })
        }
      )
    }
  }

}
