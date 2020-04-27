import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuitarComponent } from './guitar.component';
import { AnatomyComponent } from './tabs/anatomy/anatomy.component';
import { GuitarGenresComponent } from './tabs/guitar-genres/guitar-genres.component';

const routes: Routes = [
  {
    path: '',
    component: GuitarComponent,
    children: [
      {
        path: 'anatomy',
        component: AnatomyComponent
      },
      {
        path: 'genres',
        component: GuitarGenresComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuitarRoutingModule { }
