import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [{
    path: 'dashboard', 
    component: PagesComponent,
    children: [
        { path: '', component: DashboardComponent, data:{titulo:'Tablero de funcionalidades'} },
        { path: 'progress', component: ProgressComponent, data:{titulo:'Progreso de pacientes'} },
        { path: 'grafica1', component: Grafica1Component, data:{titulo:'Graficos'} },
        { path: 'configuracion', component: ConfiguracionComponent, data:{titulo:'Configuracion de usuario'}}
    ]
},
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class PagesRoutingModule { }
  