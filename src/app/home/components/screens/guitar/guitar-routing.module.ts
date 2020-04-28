import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuitarComponent } from './guitar.component';
import { AnatomyComponent } from './tabs/anatomy/anatomy.component';
import { GuitarBrandsComponent } from './tabs/guitar-brands/guitar-brands.component';
import { TechniquesComponent } from './tabs/techniques/techniques.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'anatomy',
        component: AnatomyComponent
      },
      {
        path: 'brands',
        component: GuitarBrandsComponent
      },
      {
        path: 'techniques',
        component: TechniquesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuitarRoutingModule { }
