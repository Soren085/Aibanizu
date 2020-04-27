import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuitarGenresComponent } from './tabs/guitar-genres/guitar-genres.component';
import { AnatomyComponent } from './tabs/anatomy/anatomy.component';
import { GuitarRoutingModule } from './guitar-routing.module';



@NgModule({
  declarations: [GuitarGenresComponent, AnatomyComponent],
  imports: [
    CommonModule,
    GuitarRoutingModule
  ]
})
export class GuitarModule { }
