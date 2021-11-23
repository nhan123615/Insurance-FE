import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/entities/claim.entity';
import { PremiumTransaction } from 'src/app/entities/premium-transaction.entity';
import { ClaimService } from 'src/app/services/claim.service';
import { PremiumTransactionService } from 'src/app/services/premium-transaction.service';


@Component({
  selector: 'app-table-premiumtransaction',
  templateUrl: './table-premiumtransaction.component.html',
  styleUrls: ['./table-premiumtransaction.component.scss']
})
export class TablePremiumTransactionComponent implements OnInit {

  constructor(private _premiumTransactionService: PremiumTransactionService) { }
  tbTrans: PremiumTransaction[];
  count: any;
  count1: any;
  loading = false;
  ngOnInit(): void {
    this.countTran();
    this.getTran();

  }

  getTran() {
    this.loading = true;

    this._premiumTransactionService.findAll().then(
      res => {
        this.loading = false;

        this.tbTrans = res;
      },
      error => {
        this.loading = false;

        console.error(error);
      }


    );
  }

  countTran() {
    this.loading = true;

    this._premiumTransactionService.count().then(res => {
      this.loading = false;

      this.count = res;
      this.count1 = this.count.result;
    },
      error => {
        this.loading = false;

        console.log(error);
      });
  }
}
