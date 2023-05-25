import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangsComponent } from './langs.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LangsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    DataTablesModule,
    RouterModule.forChild([
      {path:"",component:LangsComponent}
    ]),
    FormsModule
  ]
})
export class LangsModule { }
