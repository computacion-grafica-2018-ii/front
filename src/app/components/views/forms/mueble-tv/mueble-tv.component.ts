import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from 'src/app/services/furnitures/test.service';
import { AlertService } from 'src/app/services/alert-service/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mueble-tv',
  templateUrl: './mueble-tv.component.html',
  styleUrls: ['./mueble-tv.component.scss']
})
export class MuebleTvComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl( null, [ Validators.required ] ),
    email: new FormControl( null, [ Validators.required, Validators.email ] ),

    Alto: new FormControl( 800, [ Validators.required, Validators.min( 500 ), Validators.max( 1500 ) ] ),
    Ancho: new FormControl( 1500, [ Validators.required, Validators.min( 1000 ), Validators.max( 2500 ) ] ),
    Profundidad: new FormControl( 350, [ Validators.required, Validators.min( 350 ), Validators.max( 800 ) ] ),
  })

  constructor( private testService: TestService, private alertService: AlertService, private router: Router ) { }

  ngOnInit( ) {
  }

  inputErrorHandler( name ) {
    switch ( name ) {
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
      case 'Alto':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'min' ) )
          return 'Mínimo 500'
        else if ( this.form.get( name ).hasError( 'max' ) )
          return 'Máximo 1500'
      case 'Ancho':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'min' ) )
          return 'Mínimo 1000'
        else if ( this.form.get( name ).hasError( 'max' ) )
          return 'Máximo 2500'
      case 'Profundidad':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'min' ) )
          return 'Mínimo 350'
        else if ( this.form.get( name ).hasError( 'max' ) )
          return 'Máximo 800'
    }

    return 'none'
  }

  sendRequest( ) {
    if ( this.form.valid ) {
      this.alertService.showSwal( 'loading' )
      this.testService.muebleTv( this.form.value ).subscribe(
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
