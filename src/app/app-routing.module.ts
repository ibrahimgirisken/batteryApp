import { LayoutuiComponent } from './ui/layoutui/layoutui.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';
import { AuthGuard } from './guards/common/auth.guard';

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
          ),canActivate:[AuthGuard]
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./admin/components/users/users.module').then(
            (module) => module.UsersModule
          ),canActivate:[AuthGuard]
      },
      {
        path: 'corporate',
        loadChildren: () =>
          import('./admin/components/corporate/corporate.module').then(
            (module) => module.CorporateModule
          ),canActivate:[AuthGuard]
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./admin/components/settings/settings.module').then(
            (module) => module.SettingsModule
          ),canActivate:[AuthGuard]
      },
      {
        path: 'slider',
        loadChildren: () =>
          import('./admin/components/slider/slider.module').then(
            (module) => module.SliderModule
          ),canActivate:[AuthGuard]
      },
      {
        path: 'sss',
        loadChildren: () =>
          import('./admin/components/sss/sss.module').then(
            (module) => module.SssModule
          ),canActivate:[AuthGuard]
      },
      {
        path: 'lang',
        loadChildren: () =>
          import('./admin/components/langs/langs.module').then(
            (module) => module.LangsModule
          ),canActivate:[AuthGuard]
      },
    ],canActivate:[AuthGuard]
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
      {
        path: 'register',
        loadChildren: () =>
          import('./ui/components/register/register.module').then(
            (module) => module.RegisterModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./ui/components/login/login.module').then(
            (module) => module.LoginModule
          ),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
