import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ClaimExtend } from '../entities/claim-extend.entity';
import { Claim } from '../entities/claim.entity';
import { HttpObservablesService } from './http-method/http-observables.service';

@Injectable()
export class ClaimService {
  private BASE_URL:string =  environment.BASE_URL + '/claim/' ;

  constructor(
    private httpMethod: HttpObservablesService,
    private httpClient: HttpClient) {}


  details(id: number) {
    // return this.httpClient
    //   .get(this.BASE_URL + 'claim-details/' + id)
    //   .toPromise()
    //   .then((res) => res as Claim);
    return this.httpMethod.getUrl(`${this.BASE_URL}claim-details/${id}`);
  }

  findAll() {
    // return this.httpClient
    //   .get(this.BASE_URL + 'all-claims')
    //   .toPromise()
    //   .then((res) => res as Claim[]);
    return this.httpMethod.getUrl(`${this.BASE_URL}all-claims`);
  }
 
  count() {
    // return this.httpClient
    //   .get(this.BASE_URL + 'count')
    //   .toPromise()
    //   .then(res => res as number)
    return this.httpMethod.getUrl(`${this.BASE_URL}count`);
  }

  findByCustomerId(customerId:number) {
    // return this.httpClient
    // .get(this.BASE_URL + 'claims-by-customer-id/'+customerId)
    // .toPromise()
    // .then((res)=> res as ClaimExtend[]);
    return this.httpMethod.getUrl(`${this.BASE_URL}claims-by-customer-id/${customerId}`);
  }

  findByCustomerPolicyId(customerPolicyId:number) {
    // return this.httpClient
    // .get(this.BASE_URL + 'claims-by-customer-id/'+customerId)
    // .toPromise()
    // .then((res)=> res as ClaimExtend[]);
    return this.httpMethod.getUrl(`${this.BASE_URL}claims-by-customer-policy-id/${customerPolicyId}`);
  }
}
