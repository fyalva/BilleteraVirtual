import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

import { FormBuilder } from '@angular/forms';
import { RegisterForm } from 'interfaces/register-form.intefaces';
import {LoginForm} from 'interfaces/login-form'

import { Usuario } from '../models/usuario.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export class usuarios{
  usuarioId: number;
    Nombre: string;
    //Apellido: string;
    Email: string;
   // Telefono: string;
   //  ProvinciaId: number;
   // LocalidadId: number;
   //  FechaDeNacimiento: string;
    //SexoId: number;
    password: string;
    terminos: string;
}

@Injectable({providedIn:'root'})
export class UsuarioService {
 // private url = environment.base_url;
constructor(private http : HttpClient) { } 
url="http://localhost:5079/Usuario";
//readonly  rootURL ='http://localhost:58956/api'
 
///crearUsuario(usuario:Usuario)
 //login( formData: LoginForm ) {
    
  //return this.http.post(`${ base_url }/Autenticacion`, formData )
          //    .pipe(
          //      tap( (resp: any) => {
           //       localStorage.setItem('token', resp.token )
          //      })
          //    );

crearUsuario(usuario:Usuario):Observable<Usuario>{
  return this.http.post<Usuario>(this.url, usuario);
}

/*
 postUsuario(formData : Usuario){
    //return this.http.post(`${this.rootURL}/usuarios`,formData);
    return this.http.post<Usuario>(`${this.base_url}usuarios`, Usuario);
     
   }

   onCrearUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.rootURL+'api/Usuarios', usuario);
  }

   crearUsuario (formData: RegisterForm){
    return this.http.post<RegisterForm>(this.rootURL+'/Usuarios', formData)
   }
*/
   login( formData: LoginForm ) {}}
    
   // return this.http.post(this.rootURL+'/Usuarios', formData )
               // .pipe(
               //   tap( (resp: any) => {
                //    localStorage.setItem('token', resp.token )
               //   })
               // );

  //}
  
      // return this.http.post(this.rootURL+'/Usuarios/LoginUsuario', formData)
   //}  
 // }
