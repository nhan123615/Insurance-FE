import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { PolicyDetailService } from 'src/app/services/policy-detail.service';

@Component({
  selector: 'app-cus-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {
  policyDetailId: number;
  color: string = 'danger';
  loading = false;
  policyDetail: any;
  constructor(private commonService: CommonService, private policyDetailService: PolicyDetailService) { }
  ngOnInit(): void {
    this.policyDetailId = this.commonService.passingData['policy-detail'] || null;
    if (this.policyDetailId) {
      this.initData(this.policyDetailId);
    }
  }

  initData(policyDetailId: number) {
    this.loading = true;
    this.policyDetailService.findById(policyDetailId).then(data => {
      this.loading = false;
      this.policyDetail = data
    })
  }
}
