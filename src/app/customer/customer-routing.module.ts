import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimTableComponent } from './claim-table/claim-table.component';
import { BuyPolicyComponent } from './components/buy-policy/buy-policy.component';
import { CustomerPolicyComponent } from './components/customer-policy/policy.component';
import { LayoutCustomerComponent } from './components/layout/layout.component';
import { CustomerComponent } from './customer.component';
import { ProfileComponent } from './profile/profilecomponent';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import { UpdateProfileComponent } from './update-profile/settings.component';



const routes: Routes = [
  {
    path: '',
    // component: LayoutCustomerComponent,
    loadChildren: () =>
      import('./components/layout/layout.module').then(
        (m) => m.LayoutCustomerModule
      ),
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'customer-policy',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'buy-policy',
    //     component: BuyPolicyComponent
    //   },
    //   {
    //     path: 'profile',
    //     // component: CustomerComponent,
    //     children: [
    //       {
    //         path: '',
    //         pathMatch: 'full',
    //         component: ProfileComponent
    //       },
    //       {
    //         path: 'transaction',
    //         component: TransactionTableComponent
    //       },
    //       {
    //         path: 'claim',
    //         component: ClaimTableComponent
    //       },
    //       {
    //         path: 'update-profile',
    //         component: UpdateProfileComponent
    //       },

    //     ],
    //   },

    //   {
    //     path: 'customer-policy',
    //     component: CustomerPolicyComponent
    //   },
    //   { path: '', redirectTo: 'overview', pathMatch: 'full' },
    //   { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    // ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }
