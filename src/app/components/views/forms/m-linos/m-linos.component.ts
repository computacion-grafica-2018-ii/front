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

    Height: new FormControl( 2500, [ Validators.required, Validators.min( 1900 ), Validators.max( 2500 ) ] ),
    Width: new FormControl( 2000, [ Validators.required, Validators.min( 1400 ), Validators.max( 2000 ) ] ),
    Depth: new FormControl( 550, [ Validators.required, Validators.min( 350 ), Validators.max( 550 ) ] ),
    NumSpacesL: new FormControl( 4, [ Validators.required ] ),
    NumSpacesR: new FormControl( 5, [ Validators.required ] ),
    FurniType: new FormControl( 0, [ Validators.required ] ),
  }, this.customValidators )

  constructor( private testService: TestService, private alertService: AlertService, private router: Router ) { }

  ngOnInit( ) {
  }

  customValidators( AC: AbstractControl ) {
    let Height = AC.get( 'Height' ).value
    let NumSpacesL = AC.get( 'NumSpacesL' ).value
    let NumSpacesR = AC.get( 'NumSpacesR' ).value * .8

    if ( Height / NumSpacesL < 300 || Height / NumSpacesL > 700 ) {
      AC.get( 'NumSpacesL' ).setErrors({
          error: true
      })
    } else if ( Height / NumSpacesR < 300 || Height / NumSpacesR > 700 ) {
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
        else if ( this.form.get( name).hasError( 'min' ) )
          return 'Mínimo 1900'
        else if ( this.form.get( name).hasError( 'max' ) )
          return 'Máximo 2500'
      case 'Width':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name).hasError( 'min' ) )
          return 'Mínimo 1400'
        else if ( this.form.get( name).hasError( 'max' ) )
          return 'Máximo 2000'
      case 'Depth':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name).hasError( 'min' ) )
          return 'Mínimo 350'
        else if ( this.form.get( name).hasError( 'max' ) )
          return 'Máximo 550'
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
