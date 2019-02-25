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
    email: new FormControl( null, [ Validators.required ] ),

    quantity: new FormControl( 1, [ Validators.required ] ),

    Alto: new FormControl( 750, [ Validators.required, Validators.min( 500 ) ] ),
    Ancho: new FormControl( 1750, [ Validators.required, Validators.min( 1000 ) ] ),
    Profundidad: new FormControl( 500, [ Validators.required, Validators.min( 350 ) ] ),

    PrecioMadera: new FormControl( 1000, [ Validators.required ] ),
    PrecioAluminio: new FormControl( 1500, [ Validators.required ] ),
    PrecioMinifix: new FormControl( 1500, [ Validators.required ] ),
    PrecioBisagra: new FormControl( 10000, [ Validators.required ] ),
    PrecioTornillo: new FormControl( 1000, [ Validators.required ] ),
    "Cotización": new FormControl( Math.floor( Math.random( ) * 10000 ), [ Validators.required ] ),

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
      case 'Alto':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'min' ) )
          return 'Mínimo 500'
      case 'Ancho':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'min' ) )
          return 'Mínimo 1000'
      case 'Profundidad':
        if ( this.form.get( name ).hasError( 'required' ) )
          return 'Este campo es requerido'
        else if ( this.form.get( name ).hasError( 'min' ) )
          return 'Mínimo 350'
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
