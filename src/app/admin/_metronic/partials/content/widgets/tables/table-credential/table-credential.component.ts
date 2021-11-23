import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/entities/claim.entity';
import { Credentiall } from 'src/app/entities/credential.entity';
import { CredentialService } from 'src/app/services/credential.service';


@Component({
  selector: 'app-table-credential',
  templateUrl: './table-credential.component.html',
  styleUrls: ['./table-credential.component.scss']
})
export class TableCredentialComponent implements OnInit {

  constructor(private _credentialService: CredentialService) { }
  tbCredentials: Credentiall[];
  count: any;
  count1: any;

  loading = false;
  ngOnInit(): void {
    this.countCredential();
    this.getCredential();
  }

  getCredential() {
    this.loading = true;

    this._credentialService.findAll().then(
      res => {
        this.loading = false;

        this.tbCredentials = res;
      },
      error => {
        this.loading = false;

        console.error(error);
      }


    );
  }
  countCredential() {
    this.loading = true;

    this._credentialService.count().then(res => {
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
