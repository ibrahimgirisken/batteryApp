import { DeleteDirective } from './../../../directives/admin/delete.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    DeleteDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ProductsComponent},
      {path:"create",component:CreateComponent}
    ])
  ]
})
export class ProductsModule { }
