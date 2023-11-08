import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'
import {} from 'src/app/services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {//implements OnInit {
public formRegister =false;
  public loginForm = this.fb.group({
    Email: [ localStorage.getItem('email') || '' , [ Validators.required, Validators.email ] ],
    password: ['', Validators.required ],
    remember: [false]
  });
  constructor( private router: Router,
               private fb: FormBuilder,
               private usuarioService: UsuarioService,
                ) { }

 //ngOnInit(): void {
    //this.renderButton();
 // }
login() {
//CON TOKEN
//console.log('ingreso');
//if(this.loginForm.valid){
 // console.log(this.loginForm.value);
  
 // this.authService.login( this.loginForm.value)  
 // .subscribe( resp => {
 //     console.log(resp);
 //     console.log('redireccionar');
 //     this.router.navigateByUrl('/dashboard');
      //usuarioId
    
//  })
//}(err) => {
                      
  // Si sucede un error
//Swal.fire('Error', err.error.msg, 'error' );
  
 // console.log('no ingreso');
//}



//}

  //SIN TOKEN
/*
    console.log('ingreso');
    this.usuarioService.login( this.loginForm.value )
      .subscribe( resp => {

        if ( this.loginForm.get('remember').value ){ 
          localStorage.setItem('email', this.loginForm.get('email').value );
        } else {
          localStorage.removeItem('email');
        }

        // Navegar al Dashboard
        this.router.navigateByUrl('/dashboard');

      }, (err) => {
        // Si sucede un error
     //   Swal.fire('Error', err.error.msg, 'error' );
     console.log('error inesperado');
      });

 // }
  
//}*/


}
}