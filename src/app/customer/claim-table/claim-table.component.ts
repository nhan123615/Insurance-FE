import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClaimExtend } from 'src/app/entities/claim-extend.entity';
import { Customer } from 'src/app/entities/customer.entity';
import { ClaimService } from 'src/app/services/claim.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'claim-table',
  templateUrl: './claim-table.component.html',
})
export class ClaimTableComponent implements OnInit {
  loading = false;
  claims: ClaimExtend[]
  customer: Customer

  constructor(
    private claimService: ClaimService,
    private customerService: CustomerService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.claims = null;
    this.loadClaims();
  }

  loadClaims() {
    this.loading = true;
    const credential = JSON.parse(localStorage.getItem("credential"));
    this.customerService.detailsbycredentialid(credential.id).then(
      res => {
        this.loading = false;
        console.log("Customer id: " + res.id);
        this.customer = res;
        this.claimService.findByCustomerId(this.customer.id).then(
          res2 => {
            console.log(res2);
            this.claims = res2;
          },
          error2 => {
            console.log(error2);
          }
        )
      },
      error => {
        this.loading = false;
        console.log(error);
      }
    )
  }
}
