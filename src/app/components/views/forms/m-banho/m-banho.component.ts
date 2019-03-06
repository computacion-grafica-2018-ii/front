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
    email: new FormControl( null, [ Validators.required, Validators.email ] ),

    phone: new FormControl( null, [ Validators.required ] ),

    Ancho: new FormControl( 500, [ Validators.required, Validators.min( 500 ), Validators.max( 1000 ) ] ),
    Largo: new FormControl( 1200, [ Validators.required, Validators.min( 1000 ), Validators.max( 3000 ) ] ),
    Alto: new FormControl( 900, [ Validators.required, Validators.min( 700 ), Validators.max( 1200 ) ] ),
    Largo_PD: new FormControl( 300, [ Validators.required ] ),
    Largo_PI: new FormControl( 300, [ Validators.required ] ),
    Alto_Cajones: new FormControl( 150, [ Validators.required, Validators.min( 100 ), Validators.max( 200 ) ] ),

    Espesor: new FormControl( 20, [ Validators.required ] ),
    Esp_Lam: new FormControl( 2, [ Validators.required ] ),
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
      case 'phone':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'email':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'email' ) )
          return 'Email inválido'
      case 'quantity':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'Ancho':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'min' ) )
          return 'Mínimo 500'
        else if ( this.form.get( name ).hasError( 'max' ) )
          return 'Máximo 1000'
      case 'Largo':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'min' ) )
          return 'Mínimo 1000'
        else if ( this.form.get( name ).hasError( 'max' ) )
          return 'Máximo 3000'
      case 'Alto':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'min' ) )
          return 'Mínimo 700'
        else if ( this.form.get( name ).hasError( 'max' ) )
          return 'Máximo 1200'
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
          return 'Mínimo 100'
        else if ( this.form.get( name ).hasError( 'max' ) )
          return 'Máximo 200'
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
