import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/customer.entity';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-table-customer',
  templateUrl: './table-customer.component.html',
  styleUrls: ['./table-customer.component.scss']
})
export class TableCustomerComponent implements OnInit {

  constructor(private _customerService: CustomerService) { }
  tbCustomers: Customer[];
  count: any;
  count1: any;
  loading = false;
  ngOnInit(): void {

    this.countCustomer();
    this.getCustomer();
  }

  getCustomer() {

    this.loading = true;
    this._customerService.findAll().then(
      res => {

        this.loading = false;
        this.tbCustomers = res;
      },
      error => {
        this.loading = false;

        console.error(error);
      }


    );
  }
  countCustomer() {

    this.loading = true;
    this._customerService.count().then(res => {
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
