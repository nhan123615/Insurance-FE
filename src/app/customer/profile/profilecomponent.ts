import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/entities/customer.entity';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-overview',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  customer: Customer;

  loading = false;
  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.customer = new Customer();
    this.loadProfile();
  }
  loadProfile() {
    this.loading = true;
    const credential = JSON.parse(localStorage.getItem("credential"));
    console.log("Credential id: " + credential.id);
    this.customerService.detailsbycredentialid(credential.id).then(
      res => {
        this.loading = false;
        console.log(res);
        this.customer = res;
        console.log(this.customer);
        this.toastr.success("Welcome back");
      },
      error => {
        this.loading = false;
        console.log(error);
      }
    );
  }
}
