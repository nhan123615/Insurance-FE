import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/entities/policy.entity';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-health-insurance',
  templateUrl: './health-insurance.component.html',
  styleUrls: ['./health-insurance.component.css']
})
export class HealthInsuranceComponent implements OnInit {
  loading = false;
  constructor(
    private _policyService: PolicyService,
    private cd : ChangeDetectorRef
    ) { }
  lifePolicy: Policy[]

  ngOnInit() {
    this.findAllByInsuranceId(2);
  }

  findAllByInsuranceId(id: number) {
    this.loading = true;
    this._policyService.findAllByInsuranceType(id).then(
      res => {
        this.loading = false;
        this.cd.detectChanges();
        console.log(res);
        for (let i = 0; i < res.length; i++) {
          res[i].amount = Math.round(res[i].amount / 12);
        }
        this.lifePolicy = res;
      },
      error => {
        this.loading = false;
        return null;
      }
    );
  }
}
