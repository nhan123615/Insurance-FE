import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Policy } from '../entities/policy.entity';
import { HttpObservablesService } from './http-method/http-observables.service';

@Injectable()
export class PolicyService {
  private BASE_URL: string = environment.BASE_URL + '/customer-policy';

  constructor(private httpClient: HttpClient, private httpMethod: HttpObservablesService) { }


  findAllByInsuranceType(id: number) {
    // return this.httpClient
    //   .get(this.BASE_URL + '/policy-by-insurancetype/' + id)
    //   .toPromise()
    //   .then((res) => res as Policy[]);
    return this.httpMethod.getUrl(`${this.BASE_URL}/policy-by-insurancetype/`+id);
  }

 

  findByCustomerId(id: number) {
    return this.httpMethod.getUrl(`${this.BASE_URL}/customer-policies/${id}`);
  }


}
