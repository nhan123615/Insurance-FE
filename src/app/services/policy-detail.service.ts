import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Policy } from '../entities/policy.entity';
import { HttpObservablesService } from './http-method/http-observables.service';

@Injectable()
export class PolicyDetailService {
  private BASE_URL: string = environment.BASE_URL + '/policy';

  constructor(private httpMethod: HttpObservablesService,
    private httpClient: HttpClient) { }

  findById(id: number) {
    return this.httpMethod.getUrl(`${this.BASE_URL}/policy-details/${id}`)
  }

  findByInsuranceType(id: number) {
    return this.httpMethod.getUrl(`${this.BASE_URL}/policy-by-insurancetype/${id}`)

  }
  findAll() {
    // return this.httpClient
    //   .get(this.BASE_URL + '/all-policies/')
    //   .toPromise()
    //   .then((res) => res as Policy[]);
    return this.httpMethod.getUrl(`${this.BASE_URL}/all-policies`);
  }

  count() {
    // return this.httpClient
    //   .get(this.BASE_URL + '/count')
    //   .toPromise()
    //   .then(res => res as number)
    return this.httpMethod.getUrl(`${this.BASE_URL}/count`);
  }

}
