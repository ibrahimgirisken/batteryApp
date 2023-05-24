import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateComponent } from './corporate.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CorporateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:CorporateComponent}
    ])
  ]
})
export class CorporateModule { }
