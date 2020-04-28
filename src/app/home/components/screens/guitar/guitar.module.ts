import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuitarBrandsComponent } from './tabs/guitar-brands/guitar-brands.component';
import { AnatomyComponent } from './tabs/anatomy/anatomy.component';
import { GuitarRoutingModule } from './guitar-routing.module';
import { TechniquesComponent } from './tabs/techniques/techniques.component';



@NgModule({
  declarations: [GuitarBrandsComponent, AnatomyComponent, TechniquesComponent],
  imports: [
    CommonModule,
    GuitarRoutingModule
  ]
})
export class GuitarModule { }
