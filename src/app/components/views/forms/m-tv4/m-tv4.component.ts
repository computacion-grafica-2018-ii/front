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
    email: new FormControl( null, [ Validators.required, Validators.email ] ),

    alto: new FormControl( 1000, [ Validators.required, Validators.min( 500 ), Validators.max( 1000 ) ] ),
    ancho: new FormControl( 2000, [ Validators.required, Validators.min( 500 ), Validators.max( 2000 ) ] ),
    profundidad: new FormControl( 350, [ Validators.required, Validators.min( 200 ), Validators.max( 500 ) ] ),
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
        else if ( this.form.get( name ).hasError( 'email' ) )
          return 'Email inválido'
      case 'quantity':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'alto':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'min' ) )
          return 'Mínimo 500'
        else if ( this.form.get( name ).hasError( 'max' ) )
          return 'Máximo 1000'
      case 'ancho':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'min' ) )
          return 'Mínimo 500'
        else if ( this.form.get( name ).hasError( 'max' ) )
          return 'Máximo 2000'
      case 'profundidad':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'min' ) )
          return 'Mínimo 200'
        else if ( this.form.get( name ).hasError( 'max' ) )
          return 'Máximo 500'
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
