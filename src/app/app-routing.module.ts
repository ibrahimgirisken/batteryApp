import { LayoutuiComponent } from './ui/layoutui/layoutui.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
