import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { DialogService } from 'primeng/dynamicdialog';
import { BranchService } from '../services/branch.service';
import { ClaimService } from '../services/claim.service';
import { CommonService } from '../services/common.service';
import { CustomerService } from '../services/customer.service';
import { PolicyDetailService } from '../services/policy-detail.service';
import { PolicyService } from '../services/policy.service';
import { PremiumTransactionService } from '../services/premium-transaction.service';
import { ClaimTableComponent } from './claim-table/claim-table.component';
import { AgentDetailComponent } from './components/agent-detail/agent-detail.component';
import { CustomerPolicyComponent } from './components/customer-policy/policy.component';
import { PolicyComponent } from './components/policy/policy.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { ProfileComponent } from './profile/profilecomponent';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import { ProfileDetailsComponent } from './update-profile/forms/profile-details/profile-details.component';
import { UpdateProfileComponent } from './update-profile/settings.component';
import { BuyPolicyComponent } from './components/buy-policy/buy-policy.component';
import { ToastrService } from 'ngx-toastr';
import { CustomerPolicyService } from '../services/customer-policy.service';
import { PremiumTypeService } from '../services/premium-type.service';
import { ClaimDetailComponent } from './components/claim-detail/claim-detail.component';
import { PaypalService } from '../services/paypal.service';
import { ShareModule } from '../share.module';
import { LayoutCustomerModule } from './components/layout';

@NgModule({
  declarations: [
    CustomerComponent,
    UpdateProfileComponent,
    ProfileDetailsComponent,
    ProfileComponent,
    TransactionTableComponent,
    ClaimTableComponent,
    CustomerPolicyComponent,
    PolicyComponent,
    AgentDetailComponent,
    BuyPolicyComponent,
    ClaimDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    InlineSVGModule.forRoot(),
    ShareModule,
    LayoutCustomerModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    CustomerService,
    PolicyService,
    DialogService,
    CommonService,
    PolicyDetailService,
    BranchService,
    DatePipe,
    PremiumTransactionService,
    ClaimService,
    CustomerPolicyService,
    PremiumTypeService,
    PaypalService
  ],
  entryComponents: [
    PolicyComponent
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
