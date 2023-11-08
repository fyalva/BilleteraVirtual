import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebasComponent } from './pruebas/pruebas.component';
import { BuenasComponent } from './buenas/buenas.component';



@NgModule({
  declarations: [PruebasComponent, BuenasComponent],
  imports: [
    CommonModule
  ]
})
export class ViernesModule { }
