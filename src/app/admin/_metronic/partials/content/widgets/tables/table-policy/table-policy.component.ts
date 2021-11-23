import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/customer.entity';
import { Policy } from 'src/app/entities/policy.entity';
import { PolicyDetailService } from 'src/app/services/policy-detail.service';


@Component({
  selector: 'app-table-policy',
  templateUrl: './table-policy.component.html',
  styleUrls: ['./table-policy.component.scss']
})
export class TablePolicyComponent implements OnInit {

  constructor(private _policyService: PolicyDetailService) { }
  tbPolis: Policy[];
  count: any;
  count2: any;
  loading = false;
  ngOnInit(): void {

    this.countPolicy();
    this.getPolicy();
  }

  getPolicy() {
    this.loading = true;

    this._policyService.findAll().then(
      res => {
        this.loading = false;

        this.tbPolis = res;
      },
      error => {
        this.loading = false;

        console.error(error);
      }


    );
  }
  countPolicy() {
    this.loading = true;

    this._policyService.count().then(res => {
      this.loading = false;

      this.count = res;
      this.count2 = this.count.result;
    },
      error => {
        this.loading = false;

        console.log(error);
      });
  }

}
