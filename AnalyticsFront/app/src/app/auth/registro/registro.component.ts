import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { UsuarioService} from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'
import { Usuario } from 'src/app/models/usuario.model';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {
 
  public formSubmitted = false;
  usuario: Usuario =new Usuario();
  public registerForm= this.fb.group({
    Nombre:['', Validators.required],
    Email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
  password2:['', [Validators.required, Validators.minLength(6)]],
  terminos: [true,Validators.required ],
},{Validators:this.passwordsIguales('password', 'password2' ) }
 );
  constructor( private fb:FormBuilder, 
               private usuarioService: UsuarioService, private router: Router) { }       
crearUsuario(usuario:Usuario) {
    this.formSubmitted = true;
    console.log( this.registerForm.value );
    if(this.registerForm.valid)
    {
      console.log("enviando al servidor...");
      console.log(usuario);
      this.usuarioService.crearUsuario(usuario).subscribe(data => {
        if (data.usuarioId>0)
        {
          alert("BIEN");
        this.router.navigate(['/dashboard'])
        }
        })
      

      //this.usuarioService.crearUsuario( this.registerForm.value)
      //   .subscribe( resp => {
      //    console.log(resp);
      //    console.log('redireccionar');
      //    this.router.navigateByUrl('/dashboard');
     // })
    }(err) => {  // Si sucede un error
  Swal.fire('Error', err.error.msg, 'error' ); 
      console.log('no ingreso');
    }
 }       
/*****************

    this.http.get(apiUrl,  { 'headers': headers }).subscribe(
      (response) => {
        // Maneja la respuesta de la API aquí
        console.log('Respuesta de la API:', response);
      },
      (error) => {
        // Maneja errores aquí
        console.error('Error al enviar datos:', error);
      }
    );
***************/     
campoNoValido( campo: string ): boolean {
    
  if ( this.registerForm.get(campo).invalid && this.formSubmitted ) {
     return true;
       } else {
          return false;
              }
     }
aceptaTerminos() {
    return !this.registerForm.get('terminos').value && this.formSubmitted;
            }
passwordsIguales(pass1Name: string, pass2Name: string ) {
   return ( formGroup: FormGroup ) => {
     const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);
          
      if ( pass1Control.value === pass2Control.value ) {
           pass2Control.setErrors(null)
         } else {
           pass2Control.setErrors({ noEsIgual: true })
            }
 }
            }
contrasenasNoValidas() {
  const pass1 = this.registerForm.get('password').value;
  const pass2 = this.registerForm.get('password2').value;
          
   if ( (pass1 !== pass2) && this.formSubmitted ) {
      return true;
       } else {
         return false;
         }
          
       }
        
          
  //Metodo al enviar el fomulario
  
}