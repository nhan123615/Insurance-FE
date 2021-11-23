import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonService } from 'src/app/services/common.service';
import { PolicyService } from 'src/app/services/policy.service';
import { TransactionTableComponent } from '../../transaction-table/transaction-table.component';
import { AgentDetailComponent } from '../agent-detail/agent-detail.component';
import { ClaimDetailComponent } from '../claim-detail/claim-detail.component';
import { PolicyComponent } from '../policy/policy.component';

@Component({
  selector: 'app-customer-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class CustomerPolicyComponent implements OnInit {
  loading = false;
  policies: any = [];
  refPolicy: DynamicDialogRef;
  refAgent: DynamicDialogRef;
  refTrans: DynamicDialogRef;
  refClaim: DynamicDialogRef;
  constructor(private policyService: PolicyService, private dialogService: DialogService, private commonService: CommonService) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.loading = true;
    let credential = JSON.parse(localStorage.getItem('credential'))
    this.policyService.findByCustomerId(credential.customer.id).then(data => {
      this.loading = false
      this.policies = data;
    });
  }




  onShowTransDialog(item: any) {
    this.refTrans = this.dialogService.open(TransactionTableComponent, {
      header: 'Transaction Info',
      width: '60%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });

    this.commonService.passingData['customer-policy-id'] = item.id;
  }


  onShowPolicyDialog(item: any) {
    this.refPolicy = this.dialogService.open(PolicyComponent, {
      header: 'Transaction Info',
      width: '60%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });

    this.commonService.passingData['policy-detail'] = item.policyId;

  }
  onShowAgentDialog(item: number) {
    this.refAgent = this.dialogService.open(AgentDetailComponent, {
      header: 'Claim Info',
      width: '30%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
    this.commonService.passingData['customer-policy-detail'] = item;
  }

  onShowClaimDialog(item: any) {
    this.refClaim = this.dialogService.open(ClaimDetailComponent, {
      header: 'Claim Info',
      width: '30%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
    this.commonService.passingData['customer-policy-id'] = item.id;
  }

  ngOnDestroy() {
    if (this.refPolicy) {
      this.refPolicy.close();
    } else if (this.refAgent) {
      this.refAgent.close();
    } else if (this.refTrans) {
      this.refTrans.close();
    } else if (this.refClaim) {
      this.refClaim.close();
    }
  }

}
