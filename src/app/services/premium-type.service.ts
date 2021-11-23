import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PremiumType } from '../entities/premium-type.entity';
import { HttpObservablesService } from './http-method/http-observables.service';

@Injectable()
export class PremiumTypeService {
  private BASE_URL: string = environment.BASE_URL + '/premium-type/';

  constructor(
    private httpClient: HttpClient,
    private httpMethod: HttpObservablesService
  ) {}

  details(id: number) {
    // return this.httpClient
    //   .get(this.BASE_URL + 'premiumType-details/' + id)
    //   .toPromise()
    //   .then((res) => res as PremiumType);
    return this.httpMethod.getUrl(`${this.BASE_URL}premiumType-details/${id}`);
  }

  findAll() {
    return this.httpMethod.getUrl(this.BASE_URL + 'all-premium-types');
  }

  count() {
    return this.httpClient
      .get(this.BASE_URL + 'count')
      .toPromise()
      .then((res) => res as number);
  }
}
