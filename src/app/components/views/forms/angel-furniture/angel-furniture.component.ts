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
    email: new FormControl( null, [ Validators.required, Validators.email ] ),

    altoTotal: new FormControl( 3500, [ Validators.required, Validators.min( 1800 ), Validators.max( 3500 ) ] ),
    ancho: new FormControl( 3000, [ Validators.required, Validators.min( 1000 ), Validators.max( 3000 ) ] ),
    largo: new FormControl( 1000, [ Validators.required, Validators.min( 400 ), Validators.max( 1000 ) ] ),
    ancho2: new FormControl( 1500, [ Validators.required, Validators.min( 400 ) ] ),
    cantCajones: new FormControl( 4, [ Validators.required, Validators.min( 1 ) ] ),

    espacioEntre: new FormControl( 300, [ Validators.required ] ),
    altoCajon: new FormControl( 200, [ Validators.required ] ),
    espesorTablas: new FormControl( 20, [ Validators.required ] ),
    espesorPuertas: new FormControl( 30, [ Validators.required ] ),
    anchoRiel: new FormControl( 20, [ Validators.required ] ),
    diametroVarilla: new FormControl( 30, [ Validators.required ] ),
    anchoVisagra: new FormControl( 34, [ Validators.required ] ),
    largoBisagra: new FormControl( 40, [ Validators.required ] ),
  }, this.cantCajones )

  constructor( private testService: TestService, private alertService: AlertService, private router: Router ) { }

  ngOnInit( ) {
  }

  cantCajones( AC: AbstractControl ) {
    let cantCajones = AC.get( 'cantCajones' ).value
    let altoCajon = AC.get( 'altoCajon' ).value
    let alto = AC.get( 'altoTotal' ).value * .8

    if ( AC.get( 'ancho2' ).value > AC.get( 'ancho' ).value / 2 ) {
      AC.get( 'ancho2' ).setErrors({
          max: true
      })
    } else if ( cantCajones * altoCajon > alto * .6 ) {
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
        else if ( this.form.get( name).hasError( 'min' ) )
          return 'Mínimo 1800'
        else if ( this.form.get( name).hasError( 'max' ) )
          return 'Máximo 3500'
      case 'ancho':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name).hasError( 'min' ) )
          return 'Mínimo 1000'
        else if ( this.form.get( name).hasError( 'max' ) )
          return 'Máximo 3000'
      case 'largo':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name).hasError( 'min' ) )
          return 'Mínimo 400'
        else if ( this.form.get( name).hasError( 'max' ) )
          return 'Máximo 1000'
      case 'ancho2':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name).hasError( 'min' ) )
          return 'Mínimo 400'
        else if ( this.form.get( name).hasError( 'max' ) )
          return `Máximo ${ Number( this.form.get( 'ancho' ).value ) / 2 }`
      case 'name':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'email':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name).hasError( 'email' ) )
          return 'Email inválido'
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
