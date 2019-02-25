import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { TestService } from 'src/app/services/furnitures/test.service';
import { AlertService } from 'src/app/services/alert-service/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-tv4',
  templateUrl: './m-tv4.component.html',
  styleUrls: ['./m-tv4.component.scss']
})
export class MTv4Component implements OnInit {

  form = new FormGroup({
    name: new FormControl( null, [ Validators.required ] ),
    email: new FormControl( null, [ Validators.required ] ),

    quantity: new FormControl( 1, [ Validators.required ] ),

    alto: new FormControl( 500, [ Validators.required ] ),
    ancho: new FormControl( 2000, [ Validators.required ] ),
    profundidad: new FormControl( 350, [ Validators.required ] ),

    precioMadera: new FormControl( 456, [ Validators.required ] ),
    precioAluminio: new FormControl( 50, [ Validators.required ] ),
    precioBisagra: new FormControl( 50, [ Validators.required ] ),
    precioTornillo: new FormControl( 50, [ Validators.required ] ),
    precioMinifix: new FormControl( 50, [ Validators.required ] ),

    cotizacion: new FormControl( Math.floor( Math.random( ) * 10000 ), [ Validators.required ] ),
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
      case 'alto':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'ancho':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'profundidad':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
    }

    return 'none'
  }

  sendRequest( ) {
    if ( this.form.valid ) {
      this.alertService.showSwal( 'loading' )
      this.testService.muebleTv4( this.form.value ).subscribe(
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
