import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ImpressionComponent } from './components/screens/impression/impression.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'impression',
        component: ImpressionComponent
      },
      {
        path: 'guitar',
        loadChildren:  () => import('src/app/home/components/screens/guitar/guitar.module').then(m => m.GuitarModule),

      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
