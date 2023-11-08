import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiderbarService {
menu: any[]=[
  {
    titulo:'Dashboard',
    icono: 'mdi mdi-gauge',
    submenu:[
      {titulo: 'Principal', url:'/'},
      {titulo: 'progressBar', url:'progress'},
      {titulo:'graficas', url:'grafica1'}
    ]
  }
]

  constructor() { }
}
