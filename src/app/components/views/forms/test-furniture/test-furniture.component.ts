import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from 'src/app/services/furnitures/test.service';
import { AlertService } from 'src/app/services/alert-service/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-furniture',
  templateUrl: './test-furniture.component.html',
  styleUrls: ['./test-furniture.component.scss']
})
export class TestFurnitureComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl( null, [ Validators.required ] ),
    email: new FormControl( null, [ Validators.required ] ),

    quantity: new FormControl( 1, [ Validators.required ] ),

    precioMadera: new FormControl( 200, [ Validators.required ] ),
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
  })

  constructor( private testService: TestService, private alertService: AlertService, private router: Router ) { }

  ngOnInit( ) {
  }

  sendRequest( ) {
    if ( this.form.valid ) {
      this.alertService.showSwal( 'loading' )
      this.testService.requestQuot( this.form.value ).subscribe(
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
