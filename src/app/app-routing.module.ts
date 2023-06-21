import { LayoutuiComponent } from './ui/layoutui/layoutui.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';
import { LoginComponent } from './ui/components/login/login.component';
import { RegisterComponent } from './ui/components/register/register.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'index', component: DashboardComponent },
      {
        path: 'products',
        loadChildren: () =>
          import('./admin/components/products/products.module').then(
            (module) => module.ProductsModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./admin/components/users/users.module').then(
            (module) => module.UsersModule
          ),
      },
      {
        path: 'corporate',
        loadChildren: () =>
          import('./admin/components/corporate/corporate.module').then(
            (module) => module.CorporateModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./admin/components/settings/settings.module').then(
            (module) => module.SettingsModule
          ),
      },
      {
        path: 'slider',
        loadChildren: () =>
          import('./admin/components/slider/slider.module').then(
            (module) => module.SliderModule
          ),
      },
      {
        path: 'sss',
        loadChildren: () =>
          import('./admin/components/sss/sss.module').then(
            (module) => module.SssModule
          ),
      },
      {
        path: 'lang',
        loadChildren: () =>
          import('./admin/components/langs/langs.module').then(
            (module) => module.LangsModule
          ),
      },
    ],
  },
  {
    path: '',
    component: LayoutuiComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'products',
        loadChildren: () =>
          import('./ui/components/products/products.module').then(
            (module) => module.ProductsModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./ui/components/about/about.module').then(
            (module) => module.AboutModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./ui/components/contact/contact.module').then(
            (module) => module.ContactModule
          ),
      },
      {
        path: 'faq',
        loadChildren: () =>
          import('./ui/components/faq/faq.module').then(
            (module) => module.FaqModule
          ),
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
