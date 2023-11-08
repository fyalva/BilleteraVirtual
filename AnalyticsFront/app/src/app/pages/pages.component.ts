import { Component, OnInit } from '@angular/core';
import { ConfiguracionService } from '../services/configuracion.service';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
 //styles: []
})
export class PagesComponent implements OnInit {
  
  
  constructor( private configuracionService: ConfiguracionService
  ) { }
  ngOnInit(): void {

  }

}
