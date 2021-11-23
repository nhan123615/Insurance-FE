import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/entities/customer.entity';
import { PremiumTransactionExtend } from 'src/app/entities/premium-transaction-extend.entity';
import { PremiumTransaction } from 'src/app/entities/premium-transaction.entity';
import { CommonService } from 'src/app/services/common.service';
import { CustomerService } from 'src/app/services/customer.service';
import { PaypalService } from 'src/app/services/paypal.service';
import { PremiumTransactionService } from 'src/app/services/premium-transaction.service';



@Component({
  selector: 'transaction-table',
  templateUrl: './transaction-table.component.html',
})
export class TransactionTableComponent implements OnInit {
  premiumTransactions: any = []
  total: number = 0;
  customer: Customer
  loading = false;
  customerPolicyId: number;


  constructor(
    private premiumTransactionService: PremiumTransactionService,
    private customerService: CustomerService,
    private datePipe: DatePipe,
    private commonService: CommonService,
    private payPalService: PaypalService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.premiumTransactions = null;


    this.customerPolicyId = this.commonService.passingData['customer-policy-id'] || null;
    console.warn(this.customerPolicyId)
    if (this.customerPolicyId) {
      this.loadPremiumTransactionsByCustomerPolicyId();
    }
    else {
      this.loadPremiumTransactions();
    }
  }

  loadPremiumTransactions() {
    this.loading = true;
    this.premiumTransactionService.findAll().then(data => {
      this.loading = false;
      console.log(data);
      this.premiumTransactions = data.transactions;
      this.total = data.total;
    })
  }

  loadPremiumTransactionsByCustomerPolicyId() {
    this.loading = true;
    this.premiumTransactionService.findByCustomerPolicyId(this.customerPolicyId).then(data => {
      this.loading = false;
      console.log(data);
      this.premiumTransactions = data.transactions;
      this.total = data.total;
    });
  }

  // onShowCheckoutPaypal(premiumTransaction: PremiumTransaction) {
  //   console.log("preeeee:")
  //   console.log(premiumTransaction);
  //   premiumTransaction.amount = Math.floor(premiumTransaction.amount)
  //   let pTs: PremiumTransaction[] = [premiumTransaction];
  //   console.warn(pTs)

  //   this.payPalService.PayPalCheckout(pTs).then(

  //     res => {
  //       console.warn(res)
  //       // this.router.ngOnDestroy();
  //       // window.location.href = res.path;
  //     },
  //     // error => {
  //     //   console.log(error);
  //     // }
  //   )
  // }

  onShowCheckoutPaypal(transaction: any) {
    this.loading = true;
    transaction.amount = Math.floor(transaction.amount);
    let listRequest = [transaction];

    console.warn(transaction)

    this.payPalService.PayPalCheckout(listRequest).then(data => {
      this.loading = false;
      this.router.ngOnDestroy();
      window.location.href = data.path;
      if (data.hasOwnProperty('error')) {
        this.router.navigate([data.url])
      } else {
        this.router.ngOnDestroy();
        window.location.href = data.path;
      }
      console.warn(data)
    });

  }
}
