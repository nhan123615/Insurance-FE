import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './admin/modules/auth/services/auth.guard';
import { CustomerGuard } from './services/guard/customer.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./admin/modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'customer',
    canActivate: [CustomerGuard],
    // loadChildren: () =>
    //   import('./customer/components/layout/layout.module').then(
    //     (m) => m.LayoutCustomerModule
    //   ),
    loadChildren: () =>
      import('./customer/customer.module').then(
        (m) => m.CustomerModule
      ),
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  {
    path: '',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },








  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
