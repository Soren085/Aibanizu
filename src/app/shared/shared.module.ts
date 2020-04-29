import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { SidebarButtonComponent } from './components/sidebar-button/sidebar-button.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SidebarButtonComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    SidebarButtonComponent,
    FlexLayoutModule,
    FormsModule

  ]
})
export class SharedModule { }
