import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimTableComponent } from '../../claim-table/claim-table.component';
import { ProfileComponent } from '../../profile/profilecomponent';
import { TransactionTableComponent } from '../../transaction-table/transaction-table.component';
import { UpdateProfileComponent } from '../../update-profile/settings.component';
import { BuyPolicyComponent } from '../buy-policy/buy-policy.component';
import { CustomerPolicyComponent } from '../customer-policy/policy.component';
import { LayoutCustomerComponent } from './layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutCustomerComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../../admin/pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'buy-policy',
        component: BuyPolicyComponent
      },
      {
        path: 'profile',
        // pathMatch: 'full',
        // component: CustomerComponent,
        children: [
          {
            path: '',
            component: ProfileComponent
          },
          {
            path: 'transaction',
            component: TransactionTableComponent
          },
          {
            path: 'claim',
            component: ClaimTableComponent
          },
          {

            path: 'update-profile',
            component: UpdateProfileComponent
          },

        ],
      },

      {
        path: 'customer-policy',
        component: CustomerPolicyComponent
      },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
