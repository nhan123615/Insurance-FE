import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concat, filter } from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { PolicyDetailService } from 'src/app/services/policy-detail.service';
@Component({
  selector: 'app-life-insurance',
  templateUrl: './life-insurance.component.html',
  styleUrls: ['./life-insurance.component.css']
})
export class LifeInsuranceComponent implements OnInit {

  loading = false;
  lifePolicy: any = [];
  type: any = '';
  desc: any = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private policyDetailService: PolicyDetailService,
    private router: Router,
    private toastr: ToastrService,
    private cd: ChangeDetectorRef
  ) { }


  ngOnInit() {
    this.initPolicyInsurance();
  }

  initPolicyInsurance() {
    this.loading = true;
    this.activatedRoute.params.subscribe(param => {

      let typeId = param['type'];
      (typeId) && this.policyDetailService.findByInsuranceType(typeId).then(
        data => {
          this.loading = false;
          this.cd.detectChanges();
          this.lifePolicy = data
          if (this.lifePolicy) {
            this.type = this.lifePolicy[0].insuranceTypeName;
            this.desc = this.lifePolicy[0].description;
          }
        })

    })
  }

  onBuy(policyItem: any) {
    let addedPolicyItem = [];
    if (localStorage.getItem('policy-item')) {
      addedPolicyItem = JSON.parse(localStorage.getItem('policy-item'));
      let countItem = filter(addedPolicyItem, ['id', policyItem.id])
      if (countItem.length == 0) {
        localStorage.setItem('policy-item', JSON.stringify(concat(addedPolicyItem, policyItem)));
        this.router.navigate(['/customer/buy-policy']);
      } else {
        this.toastr.error('Item already added');
      }

    } else {
      localStorage.setItem('policy-item', JSON.stringify(concat(addedPolicyItem, policyItem)));
      this.router.navigate(['/customer/buy-policy']);
    }

  }


}
