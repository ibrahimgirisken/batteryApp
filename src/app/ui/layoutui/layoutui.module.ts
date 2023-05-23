import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutuiComponent } from './layoutui.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutuiComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  exports:[
    LayoutuiComponent
  ]
})
export class LayoutuiModule { }
