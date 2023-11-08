import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  public linkTheme = document.querySelector('#theme');
  constructor() { 
    const url = localStorage.getItem ('theme') ||`./assets/css/colors/megna.css`;
    this.linkTheme.setAttribute('href', url);
  }
}
