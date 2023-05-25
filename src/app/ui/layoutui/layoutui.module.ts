import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutuiComponent } from './layoutui.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    LayoutuiComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    TranslateModule
  ],
  exports:[
    LayoutuiComponent
  ]
})
export class LayoutuiModule { }
