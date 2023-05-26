import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { LayoutuiModule } from './layoutui/layoutui.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    LayoutuiModule,
  ],
  exports:[
    LayoutuiModule
  ]
})
export class UiModule { }
