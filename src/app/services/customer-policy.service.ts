import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CustomerPolicy } from '../entities/customer-policy.entity';
import { HttpObservablesService } from './http-method/http-observables.service';


@Injectable()
export class CustomerPolicyService {
  private BASE_URL: string = environment.BASE_URL + '/customer-policy/';

  constructor(private httpClient: HttpClient, private httpMethod: HttpObservablesService) { }


  findAll() {
    // return this.httpClient
    //   .get(this.BASE_URL + 'all-customer-policies')
    //   .toPromise()
    //   .then((res) => res as CustomerPolicy[]);
    return this.httpMethod.getUrl(`${this.BASE_URL}all-customer-policies`);
  }

  count() {
    // return this.httpClient
    //   .get(this.BASE_URL + 'count')
    //   .toPromise()
    //   .then(res => res as number)
    return this.httpMethod.getUrl(`${this.BASE_URL}count`);
  }

  createCustomerPolicy(body: any) {
    return this.httpMethod.postUrl(this.BASE_URL + 'create-customer-policy', body);
  }



}
