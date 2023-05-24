import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SssComponent } from './sss.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SssComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:SssComponent}
    ])
  ]
})
export class SssModule { }
