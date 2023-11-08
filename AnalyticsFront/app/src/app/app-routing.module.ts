import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { authRoutingModule } from './auth/auth.routing';
import { PagefoundComponent } from './pages/pagefound/pagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';
const routes: Routes = [
 //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 // { path: '**', component: PagefoundComponent},
];
@NgModule({
  imports: [
  RouterModule.forRoot(routes),
   PagesRoutingModule,
   authRoutingModule
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
