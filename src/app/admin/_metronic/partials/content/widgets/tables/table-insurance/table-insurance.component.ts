import { Component, OnInit } from '@angular/core';
import { InsuranceType } from 'src/app/entities/insurance-type.entity';
import { InsuranceTypeService } from 'src/app/services/insurance-type.service';


@Component({
  selector: 'app-table-insurance',
  templateUrl: './table-insurance.component.html',
  styleUrls: ['./table-insurance.component.scss']
})
export class TableInsuranceComponent implements OnInit {

  constructor(private _insuranceTypeService: InsuranceTypeService) { }
  tbInsuntypes: InsuranceType[];
  count: any;
  count1: any;
  loading = false;
  ngOnInit(): void {
    this.countClaim();
    this.getInsurance();
  }

  getInsurance() {
    this.loading = true;
    this._insuranceTypeService.findAll().then(
      res => {
        this.loading = false;
        this.tbInsuntypes = res;
      },
      error => {
        this.loading = false;

        console.error(error);
      }


    );
  }



  countClaim() {
    this.loading = true;
    this._insuranceTypeService.count().then(res => {
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
