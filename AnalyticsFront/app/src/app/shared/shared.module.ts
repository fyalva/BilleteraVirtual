import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterDashComponent } from './footer-dash/footer-dash.component';
import { NavbarDashComponent } from './navbar-dash/navbar-dash.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ 
    BreadcrumbsComponent, 
    SidebarComponent,
    HeaderComponent,
    FooterDashComponent,
    NavbarDashComponent,],
    exports:[
      BreadcrumbsComponent,
      HeaderComponent,
      SidebarComponent,
      FooterDashComponent,
      NavbarDashComponent,
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
