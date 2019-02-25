import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { TestService } from 'src/app/services/furnitures/test.service';
import { AlertService } from 'src/app/services/alert-service/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-linos',
  templateUrl: './m-linos.component.html',
  styleUrls: ['./m-linos.component.scss']
})
export class MLinosComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl( null, [ Validators.required ] ),
    email: new FormControl( null, [ Validators.required ] ),

    quantity: new FormControl( 1, [ Validators.required ] ),

    Height: new FormControl( 2400, [ Validators.required ] ),
    Width: new FormControl( 1700, [ Validators.required ] ),
    Depth: new FormControl( 460, [ Validators.required ] ),
    NumSpacesL: new FormControl( 6, [ Validators.required ] ),
    NumSpacesR: new FormControl( 4, [ Validators.required ] ),
    FurniType: new FormControl( 0, [ Validators.required ] ),

    PricePerArea20mm: new FormControl( 1000, [ Validators.required ] ),
    PricePerArea30mm: new FormControl( 2000, [ Validators.required ] ),
    PrecioMinifix: new FormControl( 1500, [ Validators.required ] ),
    PrecioBisagra: new FormControl( 10000, [ Validators.required ] ),
    PrecioTornillo: new FormControl( 1000, [ Validators.required ] ),

    Cotizacion: new FormControl( Math.floor( Math.random( ) * 10000 ), [ Validators.required ] ),
  }, this.customValidators )

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
      case 'Height':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'Width':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'Depth':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'NumSpacesL':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'error' ) )
          return 'No es posible'
      case 'NumSpacesR':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'error' ) )
          return 'No es posible'
      case 'FurniType':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
    }

    return 'none'
  }

  sendRequest( ) {
    if ( this.form.valid ) {
      this.alertService.showSwal( 'loading' )
      this.testService.muebleLinos( this.form.value ).subscribe(
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
