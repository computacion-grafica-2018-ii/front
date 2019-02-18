import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2/dist/sweetalert2.js'
declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor( private router: Router ) { }

  showSwal( type ) {
    switch( type ) {
      case 'loading':
        Swal.fire({
          title: 'Espera...',
          allowOutsideClick: false,
          onOpen: ( ) => {
            Swal.showLoading( )
          }
        })
        break
      case 'network-rebuild':
        Swal.fire({
          title: 'Actualizando red...',
          allowOutsideClick: false,
          onOpen: ( ) => {
            Swal.showLoading( )
          }
        }).catch( Swal.noop )
        break
      case 'auth-done':
        Swal.fire({
          title: 'Autenticado',
          type: 'success',
          showConfirmButton: false
        }).catch( Swal.noop )
        break
      case 'invalid-credentials':
        Swal.fire({
          title: 'Credenciales inválidas!',
          type: 'error'
        }).catch( Swal.noop )
        break
      case 'default-error':
        Swal.fire({
          title: 'Algo salió mal :(',
          type: 'error',
          timer: 2000
        }).catch( Swal.noop )
        break
    }
  }

  showSuccessMessageSwal( msg ) {
    return Swal.fire({
      title: msg,
      type: 'success'
    })
  }

  showErrorMessageSwal( title, text ) {
    return Swal.fire({
      title: title,
      text: text,
      type: 'error',
      timer: 2000
    })
  }

  showConfirmDeletionSwal( ) {
    return Swal.fire({
      title: '¿Estás seguro?',
      text: "¡Este cambio no se puede revertir!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí!'
    })
  }

  showConfirmMsgSwal( title, text ) {
    return Swal.fire({
      title: title,
      text: text,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí!'
    })
  }

  showDeadSessionSwal( ) {
    return Swal.fire({
      title: 'Ups...',
      text: "Parece que la sesión ha expirado",
      type: 'warning',
      timer: 2500
    })
  }

  swalRef( ) {
    return Swal
  }

  closeSwal( ) {
    Swal.close( )
  }

  errorHandler( err, options ) {
    // console.log( err )
    // this.dataService.updateAuthToken( err.headers.get( 'token' ) )
    switch ( err.status ) {
      // case 401:
      //   this.showDeadSessionSwal( ).then(
      //     () => {
      //       if ( options.modal != undefined ) {
      //         options.modal.modal_toggler.click( )
      //         setTimeout( () => {
      //           this.dataService.logout( )
      //           this.dataService.updateRedirectTo( options.url )
      //           this.router.navigate( [ 'login' ] )
      //         }, 1000 )
      //       }
      //       else {
      //         this.dataService.logout( )
      //         this.dataService.updateRedirectTo( options.url )
      //         this.router.navigate( [ 'login' ] )
      //       }
      //     }
      //   ).catch(
      //     () => {
      //       if ( options.modal != undefined ) {
      //         options.modal.modal_toggler.click( )
      //         setTimeout( () => {
      //           this.dataService.logout( )
      //           this.dataService.updateRedirectTo( options.url )
      //           this.router.navigate( [ 'login' ] )
      //         }, 1000 )
      //       }
      //       else {
      //         this.dataService.logout( )
      //         this.dataService.updateRedirectTo( options.url )
      //         this.router.navigate( [ 'login' ] )
      //       }
      //     }
      //   )
      //   break
      case 404:
        this.showErrorMessageSwal( 'El servidor no encontró lo que estabas buscando', 'Código de error 404' ).catch(
          Swal.noop
        )
        break
      case 0:
        this.showErrorMessageSwal( 'El servidor no ha respondido :(', 'Código de error 504' ).catch(
          Swal.noop
        )
        this.showNotification( 'bottom', 'right', 'warning' )
        break
      case 500:
        if ( !options.validations ) {
          this.showErrorMessageSwal( 'Ha ocurrido un error', 'Contacte a su Administrador' ).catch(
            Swal.noop
          )
        } else
          this.closeSwal( )
        break
      default:
        if ( !options.validations ) {
          this.showSwal( 'default-error' )
          this.showNotification( 'bottom', 'right', 'warning' )
        }
        else
          this.closeSwal( )
    }
    // console.log( status )
    return null
  }

  showNotification( from: any, align: any, type ) {
      // const type = ['', 'info', 'success', 'warning', 'danger', 'rose', 'primary'];
      // const color = Math.floor((Math.random() * 6) + 1);

      $.notify({
          icon: 'notifications',
          message: `
          <b>Intenta recargar la página</b>
          <button type="button" aria-hidden="true" class="btn btn-info btn-just-icon pull-right" style="margin-left:20px"
              onclick="window.location.reload()">
              <i class="material-icons" style="color:white">cached</i>
          </button>
          `
      }, {
          type: type,
          timer: 3000,
          placement: {
              from: from,
              align: align
          }
      });
  }

}
