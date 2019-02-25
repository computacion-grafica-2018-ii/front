import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { TestService } from 'src/app/services/furnitures/test.service';
import { AlertService } from 'src/app/services/alert-service/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angel-furniture',
  templateUrl: './angel-furniture.component.html',
  styleUrls: ['./angel-furniture.component.scss']
})
export class AngelFurnitureComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl( null, [ Validators.required ] ),
    email: new FormControl( null, [ Validators.required ] ),

    quantity: new FormControl( 1, [ Validators.required ] ),

    precioMadera20: new FormControl( 200, [ Validators.required ] ),
    precioMadera30: new FormControl( 100, [ Validators.required ] ),
    precioMinifix: new FormControl( 100, [ Validators.required ] ),
    precioChazo: new FormControl( 100, [ Validators.required ] ),
    precioBisagra: new FormControl( 100, [ Validators.required ] ),

    cotizacion: new FormControl( Math.floor( Math.random( ) * 100000 ), [ Validators.required ] ),

    altoTotal: new FormControl( 2800, [ Validators.required ] ),
    ancho: new FormControl( 2200, [ Validators.required ] ),
    largo: new FormControl( 400, [ Validators.required ] ),
    ancho2: new FormControl( 600, [ Validators.required ] ),
    cantCajones: new FormControl( 5, [ Validators.required ] ),

    espacioEntre: new FormControl( 300, [ Validators.required ] ),
    altoCajon: new FormControl( 200, [ Validators.required ] ),
    espesorTablas: new FormControl( 20, [ Validators.required ] ),
    espesorPuertas: new FormControl( 30, [ Validators.required ] ),
    anchoRiel: new FormControl( 20, [ Validators.required ] ),
    diametroVarilla: new FormControl( 30, [ Validators.required ] ),
    anchoVisagra: new FormControl( 30, [ Validators.required ] ),
    largoVisagra: new FormControl( 40, [ Validators.required ] ),
  }, this.cantCajones )

  constructor( private testService: TestService, private alertService: AlertService, private router: Router ) { }

  ngOnInit( ) {
  }

  cantCajones( AC: AbstractControl ) {
    let cantCajones = AC.get( 'cantCajones' ).value
    let altoCajon = AC.get( 'altoCajon' ).value
    let alto = AC.get( 'altoTotal' ).value * .8

    if ( cantCajones * altoCajon > alto * .6 ) {
      AC.get( 'cantCajones' ).setErrors({
          error: true
      })
    } else {
        return null
    }
}

  sendRequest( ) {
    if ( this.form.valid ) {
      this.alertService.showSwal( 'loading' )
      this.testService.closetQuot( this.form.value ).subscribe(
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

  inputErrorHandler( name ) {
    switch ( name ) {
      case 'altoTotal':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'ancho':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'largo':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'ancho2':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'name':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'email':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'quantity':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'cantCajones':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'error' ) )
          return 'No es posible'
    }

    return 'none'
  }

}
