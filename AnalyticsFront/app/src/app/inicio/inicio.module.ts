import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { InicioRoutingModule } from './inicio.routing';
import { InicioComponent } from './inicio.component';
import { CentroComponent } from './centro/centro.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    QuienesSomosComponent,
    InicioComponent,
    CentroComponent],
    
  exports:[
    NavbarComponent,
    FooterComponent,
    QuienesSomosComponent,
    InicioComponent,
    CentroComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
