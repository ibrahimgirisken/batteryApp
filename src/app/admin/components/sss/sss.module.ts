import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SssComponent } from './sss.component';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    SssComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:SssComponent}
    ]),
    DataTablesModule
  ]
})
export class SssModule { }
