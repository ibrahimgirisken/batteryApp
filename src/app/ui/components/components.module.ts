import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { ProductsModule } from './../../admin/components/products/products.module';
import { FaqModule } from './faq/faq.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    FaqModule,
    ProductsModule,
    ContactModule,
    AboutModule
  ]
})
export class ComponentsModule { }
