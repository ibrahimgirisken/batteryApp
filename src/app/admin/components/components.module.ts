import { DashboardModule } from './dashboard/dashboard.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateModule } from './corporate/corporate.module';
import { SettingsModule } from './settings/settings.module';
import { SliderModule } from './slider/slider.module';
import { SssModule } from './sss/sss.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    UsersModule,
    DashboardModule,
    CorporateModule,
    SettingsModule,
    SliderModule,
    SssModule
  ]
})
export class ComponentsModule { }
