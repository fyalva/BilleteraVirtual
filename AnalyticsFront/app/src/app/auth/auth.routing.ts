
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentroComponent } from '../inicio/centro/centro.component';
import { InicioComponent } from '../inicio/inicio.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';




const routes: Routes = [

  { path: 'Registro', component: RegistroComponent },
   { path: 'dashboard', component: DashboardComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})/*
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })*/
  export class authRoutingModule { }
  