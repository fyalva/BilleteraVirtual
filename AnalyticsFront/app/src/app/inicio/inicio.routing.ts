import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegistroComponent } from '../auth/registro/registro.component';
import { PagesComponent } from '../pages/pages.component';
import { CentroComponent } from './centro/centro.component';
import { InicioComponent } from './inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';



const routes: Routes = [ 
    {path:'',component: InicioComponent,
   children: [
       // {path:'', component:CentroComponent },
        {path:'centro', component: CentroComponent},
        {path:'quienesSomos', component: QuienesSomosComponent},
        {path:'login', component: LoginComponent},
        {path: 'registro', component: RegistroComponent}
    ]
},

    
];

@NgModule({
    
    imports: [RouterModule.forRoot(routes),
    ],
    exports: [ RouterModule ]
  })
  export class InicioRoutingModule { }
  