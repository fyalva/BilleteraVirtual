import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule} from '@angular/router'


import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages.routing';
import { OrganizacionComponent } from './organizacion/organizacion.component';
import { TratamientoComponent } from './tratamiento/tratamiento.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { InstitucionComponent } from './institucion/institucion.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

@NgModule({
  declarations: [   
    DashboardComponent,   
    Grafica1Component, 
    ProgressComponent, 
    PagesComponent, 
    OrganizacionComponent, 
    TratamientoComponent, 
    PacientesComponent, 
    InstitucionComponent, 
    ConfiguracionComponent, 
     
  ],
  exports:[ 
    DashboardComponent,   
    Grafica1Component, 
    ProgressComponent, 
    PagesComponent, 
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PagesRoutingModule

  ]
})
export class PagesModule { }
