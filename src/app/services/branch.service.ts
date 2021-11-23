import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Branch } from '../entities/branch.entity';
import { HttpObservablesService } from './http-method/http-observables.service';

@Injectable()
export class BranchService {
  private BASE_URL: string = environment.BASE_URL + '/branch/';

  constructor(private httpMethod: HttpObservablesService,
    private httpClient: HttpClient) { }

  findById(id: number) {
    return this.httpMethod.getUrl(`${this.BASE_URL}branch-details/${id}`)
  }

  findAll() {
    // return this.httpClient
    //   .get(this.BASE_URL + 'all-branches')
    //   .toPromise()
    //   .then((res) => res as Branch[]);
    return this.httpMethod.getUrl(`${this.BASE_URL}all-branches`);

  }

  count() {
    // return this.httpClient
    //   .get(this.BASE_URL + 'count')
    //   .toPromise()
    //   .then(res => res as number)
    return this.httpMethod.getUrl(`${this.BASE_URL}count`);
  }

}
