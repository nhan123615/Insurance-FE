import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LayoutService } from '../admin/_metronic/layout';
import { LayoutInitService } from '../admin/_metronic/layout/core/layout-init.service';
import { Customer } from '../entities/customer.entity';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  // customer : Customer;
  constructor(
    // private customerService : CustomerService,
    // private formBuilder: FormBuilder,
    // private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    // this.customer = new Customer();
    // this.loadProfile();
  }
  // loadProfile() {
  //   const credential = JSON.parse(localStorage.getItem("credential"));
  //   console.log("Credential id: "+credential.id);
  //   this.customerService.detailsbycredentialid(credential.id).then(
  //     res => {
  //       console.log(res);
  //       this.customer = res;
  //       console.log(this.customer);
  //       this.toastr.success("Welcome back");
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
}
