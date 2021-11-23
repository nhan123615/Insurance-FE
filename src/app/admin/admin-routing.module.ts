import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './_metronic/layout/layout.component';
import {AgentComponent} from "./components/agent/agent.component";
import {BranchComponent} from "./components/branch/branch.component";
import {ClaimComponent} from "./components/claim/claim.component";
import {CredentialComponent} from "./components/credential/credential.component";
import {CustomerComponent} from "./components/customer/customer.component";
import {CustomerPolicyComponent} from "./components/customer-policy/customer-policy.component";
import {InsuranceTypeComponent} from "./components/insurance-type/insurance-type.component";
import {MessageComponent} from "./components/message/message.component";
import {PolicyComponent} from "./components/policy/policy.component";
import {PremiumTransactionComponent} from "./components/premium-transaction/premium-transaction.component";
import {PremiumTypeComponent} from "./components/premium-type/premium-type.component";
import {RoleComponent} from "./components/role/role.component";
import {SubscriptionComponent} from "./components/subscription/subscription.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
          },
          {
            path: 'dashboard',
            loadChildren: () =>
              import('./pages/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
              ),
          },
          {
            path: 'builder',
            loadChildren: () =>
              import('./pages/builder/builder.module').then(
                (m) => m.BuilderModule
              ),
          },
          {
            path: 'crafted/pages/profile',
            loadChildren: () =>
              import('./modules/profile/profile.module').then(
                (m) => m.ProfileModule
              ),
          },
          {
            path: 'crafted/account',
            loadChildren: () =>
              import('./modules/account/account.module').then(
                (m) => m.AccountModule
              ),
          },
          {
            path: 'crafted/pages/wizards',
            loadChildren: () =>
              import('./modules/wizards/wizards.module').then(
                (m) => m.WizardsModule
              ),
          },
          {
            path: 'crafted/widgets',
            loadChildren: () =>
              import('./modules/widgets-examples/widgets-examples.module').then(
                (m) => m.WidgetsExamplesModule
              ),
          },
          {
            path: 'apps/chat',
            loadChildren: () =>
              import('./modules/apps/chat/chat.module').then(
                (m) => m.ChatModule
              ),
          },
          {
            path: 'agent',
            component: AgentComponent
          },
          {
            path: 'branch',
            component: BranchComponent
          },
          {
            path: 'claim',
            component: ClaimComponent
          },
          {
            path: 'credential',
            component: CredentialComponent
          },
          {
            path: 'customer',
            component: CustomerComponent
          },
          {
            path: 'customer-policy',
            component: CustomerPolicyComponent
          },
          {
            path: 'insurance-type',
            component: InsuranceTypeComponent
          },
          {
            path: 'message',
            component: MessageComponent
          },
          {
            path: 'policy',
            component: PolicyComponent
          },
          {
            path: 'premium-transaction',
            component: PremiumTransactionComponent
          },
          {
            path: 'premium-type',
            component: PremiumTypeComponent
          },
          {
            path: 'role',
            component: RoleComponent
          },
          {
            path: 'subscription',
            component: SubscriptionComponent
          }

        ],
      },
    ],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/errors/errors.module').then(
        (m) => m.ErrorsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
