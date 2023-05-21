import { DashboardModule } from './dashboard/dashboard.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    UsersModule,
    DashboardModule
  ]
})
export class ComponentsModule { }
