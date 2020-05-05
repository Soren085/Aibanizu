import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { SidebarButtonComponent } from './components/sidebar-button/sidebar-button.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MainTitleComponent } from './components/main-title/main-title.component';



@NgModule({
  declarations: [SidebarButtonComponent, MainTitleComponent],
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
    FormsModule,
    MainTitleComponent
  ]
})
export class SharedModule { }
