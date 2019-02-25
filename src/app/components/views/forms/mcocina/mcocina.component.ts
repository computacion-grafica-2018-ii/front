import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from 'src/app/services/furnitures/test.service';
import { AlertService } from 'src/app/services/alert-service/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mcocina',
  templateUrl: './mcocina.component.html',
  styleUrls: ['./mcocina.component.scss']
})
export class McocinaComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl( null, [ Validators.required ] ),
    email: new FormControl( null, [ Validators.required ] ),

    quantity: new FormControl( 1, [ Validators.required ] ),

    Altura_Total: new FormControl( 600, [ Validators.required ] ),
    Ancho_Total: new FormControl( 320, [ Validators.required ] ),
    Largo_Total: new FormControl( 600, [ Validators.required ] ),
    Cantidad_Compartimentos: new FormControl( 4, [ Validators.required ] ),

    precioMadera1: new FormControl( 100, [ Validators.required ] ),
    precioMadera2: new FormControl( 200, [ Validators.required ] ),
    precioTornillos: new FormControl( 10, [ Validators.required ] ),
    precioVisagra: new FormControl( 20, [ Validators.required ] ),
    precioManija: new FormControl( 30, [ Validators.required ] ),

    cotizacion: new FormControl( Math.floor( Math.random( ) * 10000 ), [ Validators.required ] ),

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
      case 'quantity':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'Altura_Total':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'Ancho_Total':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'Largo_Total':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
      case 'Cantidad_Compartimentos':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
    }

    return 'none'
  }

  sendRequest( ) {
    if ( this.form.valid ) {
      this.alertService.showSwal( 'loading' )
      this.testService.muebleCocina( this.form.value ).subscribe(
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
