import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NgbDropdownModule,
  NgbProgressbarModule,
  NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { CredentialService } from '../services/credential.service';
import { AdminRoutingModule } from './admin-routing.module';
import { TranslationModule } from './modules/i18n';
import { Routing } from './pages/routing';
import { AsideMenuComponent } from './_metronic/layout/components/aside/aside-menu/aside-menu.component';
import { AsideComponent } from './_metronic/layout/components/aside/aside.component';
import { ContentComponent } from './_metronic/layout/components/content/content.component';
import { FooterComponent } from './_metronic/layout/components/footer/footer.component';
import { HeaderMenuComponent } from './_metronic/layout/components/header/header-menu/header-menu.component';
import { HeaderComponent } from './_metronic/layout/components/header/header.component';
import { PageTitleComponent } from './_metronic/layout/components/header/page-title/page-title.component';
import { ScriptsInitComponent } from './_metronic/layout/components/scripts-init/scripts-init.component';
import { ToolbarComponent } from './_metronic/layout/components/toolbar/toolbar.component';
import { TopbarComponent } from './_metronic/layout/components/topbar/topbar.component';
import { LayoutComponent } from './_metronic/layout/layout.component';
import { DrawersModule, DropdownMenusModule, ExtrasModule, ModalsModule, WidgetsModule } from './_metronic/partials';
import { AgentComponent } from './components/agent/agent.component';
import { BranchComponent } from './components/branch/branch.component';
import { ClaimComponent } from './components/claim/claim.component';
import { CredentialComponent } from './components/credential/credential.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerPolicyComponent } from './components/customer-policy/customer-policy.component';
import { InsuranceTypeComponent } from './components/insurance-type/insurance-type.component';
import { MessageComponent } from './components/message/message.component';
import { PolicyComponent } from './components/policy/policy.component';
import { PremiumTransactionComponent } from './components/premium-transaction/premium-transaction.component';
import { PremiumTypeComponent } from './components/premium-type/premium-type.component';
import { RoleComponent } from './components/role/role.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { AgentService } from '../services/agent.service';
import { BranchService } from '../services/branch.service';
import { ClaimService } from '../services/claim.service';
import { CustomerService } from '../services/customer.service';
import { PolicyService } from '../services/policy.service';
import { InsuranceTypeService } from '../services/insurance-type.service';
import { MessageService } from '../services/message.service';
import { PremiumTypeService } from '../services/premium-type.service';
import { PremiumTransactionService } from '../services/premium-transaction.service';
import { RoleService } from '../services/role.service copy';
import { SubscriptionService } from '../services/subscription.service';
import { CustomerPolicyService } from '../services/customer-policy.service';
import { PolicyDetailService } from '../services/policy-detail.service';
import { ShareModule } from '../share.module';



@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ScriptsInitComponent,
    ToolbarComponent,
    AsideMenuComponent,
    TopbarComponent,
    PageTitleComponent,
    HeaderMenuComponent,
    AgentComponent,
    BranchComponent,
    ClaimComponent,
    CredentialComponent,
    CustomerComponent,
    CustomerPolicyComponent,
    InsuranceTypeComponent,
    MessageComponent,
    PolicyComponent,
    PremiumTransactionComponent,
    PremiumTypeComponent,
    RoleComponent,
    SubscriptionComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TranslationModule,
    InlineSVGModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    ExtrasModule,
    ModalsModule,
    DrawersModule,
    DropdownMenusModule,
    NgbTooltipModule,
    TranslateModule,
    WidgetsModule,
    ShareModule
  ],
  providers: [
    AgentService,
    BranchService,
    ClaimService,
    CustomerService,
    CustomerPolicyService,
    CredentialService,
    PolicyService,
    PolicyDetailService,
    InsuranceTypeService,
    MessageService,
    PremiumTypeService,
    PremiumTransactionService,
    RoleService,
    SubscriptionService,
  ],
  exports: [RouterModule],
})
export class AdminModule { }
