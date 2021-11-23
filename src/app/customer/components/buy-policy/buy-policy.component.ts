import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonService } from 'src/app/services/common.service';
import { PolicyComponent } from '../policy/policy.component';
import { filter } from 'lodash';
import { CustomerService } from 'src/app/services/customer.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CustomerPolicyService } from 'src/app/services/customer-policy.service';
import { ToastrService } from 'ngx-toastr';
import { PremiumTypeService } from 'src/app/services/premium-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-policy',
  templateUrl: './buy-policy.component.html',
  styleUrls: ['./buy-policy.component.scss']
})
export class BuyPolicyComponent implements OnInit {
  loading = false;
  policyItem: Array<any> = [];
  premiumType: Array<any> = [];
  credential: any;
  selectedPremiumType: any = 1;
  updateProfile: FormGroup;
  refPolicy: DynamicDialogRef;
  constructor(
    private dialogService: DialogService,
    private commonService: CommonService,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private customerPolicyService: CustomerPolicyService,
    private toastr: ToastrService,
    private premiumTypeService: PremiumTypeService,
    private router: Router,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    if (localStorage.getItem('policy-item')) {
      this.policyItem = JSON.parse(localStorage.getItem('policy-item'));
    }
    //get credential
    if (localStorage.getItem('credential')) {
      this.credential = JSON.parse(localStorage.getItem('credential'));

    }
    this.updateProfile = this.formBuilder.group({
      id: '',
      name: '',
      birthday: this.datePipe.transform(new Date(), 'dd/MM/yyyy'),
      gender: 'male',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      occupation: '',
      credentialId: '',
      citizenId: ''
    });
    this.loadProfile();
    this.initPremiumType();
  }

  initPremiumType() {
    this.loading = true;
    this.premiumTypeService.findAll().then(data => {
      this.loading = false;
      this.premiumType = data
    });
  }



  loadProfile() {
    this.loading = true;
    this.customerService.detailsbycredentialid(this.credential.id).then(
      res => {
        this.loading = false;
        let { name, birthday, gender, street, city, state, zipCode, occupation, credentialId, citizenId, id } = res
        birthday = birthday ? this.datePipe.transform(birthday, 'dd/MM/yyyy') : this.datePipe.transform(new Date(), 'dd/MM/yyyy');
        gender = gender ? gender : 'male';
        this.updateProfile = this.formBuilder.group({
          id,
          name,
          birthday,
          gender,
          street,
          city,
          state,
          zipCode,
          occupation,
          credentialId,
          citizenId,
        })

      });
  }

  onSelectPremiumType(value: any) {
    this.selectedPremiumType = value;
  }
  openPolicyDialog(item: any) {
    this.refPolicy = this.dialogService.open(PolicyComponent, {
      header: 'Policy Details',
      width: '40%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });

    this.commonService.passingData['policy-detail'] = item.id;
  }

  onDeletePolicyItem(item: any) {
    let deletedPolicyItem = this.policyItem.filter(p => p.id != item.id);
    localStorage.setItem('policy-item', JSON.stringify(deletedPolicyItem));
    this.policyItem = deletedPolicyItem;
  }

  buyPolicy() {
    this.loading = true;
    let customerInfo = this.updateProfile.value;
    let PremiumTypeId = this.selectedPremiumType;
    // customerInfo.birthday = this.datePipe.transform(customerInfo.birthday, 'yyyy-MM-dd');
    let splitedDate = customerInfo.birthday.split('/');
    customerInfo.birthday = `${splitedDate[2]}-${splitedDate[1]}-${splitedDate[0]}`
    let policyId = [];
    this.policyItem.map(item => {
      policyId.push(item.id);
    })

    let buyPolicyItem = {
      ...customerInfo,
      policyId,
      PremiumTypeId
    }

    console.warn(buyPolicyItem)

    this.customerPolicyService.createCustomerPolicy(buyPolicyItem).then(data => {
      this.loading = false;
      if (data.hasOwnProperty('error')) {
        this.toastr.success('error');
      } else {
        localStorage.removeItem('policy-item');
        this.toastr.success(data.msg);
        setTimeout(() => {
          this.router.navigate(['/customer/customer-policy']);
        }, 1500);
      }


    })



  }
  ngOnDestroy() {
    if (this.refPolicy) {
      this.refPolicy.close();
    }
  }


}
