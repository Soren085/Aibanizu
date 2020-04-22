import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { SidebarButtonComponent } from './components/sidebar-button/sidebar-button.component';



@NgModule({
  declarations: [SidebarButtonComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    SidebarButtonComponent
  ]
})
export class SharedModule { }
