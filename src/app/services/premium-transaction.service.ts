import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PremiumTransactionExtend } from '../entities/premium-transaction-extend.entity';
import { PremiumTransaction } from '../entities/premium-transaction.entity';
import { HttpObservablesService } from './http-method/http-observables.service';

@Injectable()
export class PremiumTransactionService {
  private BASE_URL: string = environment.BASE_URL + '/premium-transaction/';

  constructor(private httpClient: HttpClient, private httpMethod: HttpObservablesService) { }


  details(id: number) {
    // return this.httpClient
    // .get(this.BASE_URL + 'premiumTransaction-details/' + id)
    // .toPromise()
    // .then((res) => res as PremiumTransaction);
    return this.httpMethod.getUrl(`${this.BASE_URL}premiumTransaction-details/` + id);
  }

  findAll() {
    // return this.httpClient
    //   .get(this.BASE_URL + 'all-premiumTransactions')
    //   .toPromise()
    //   .then((res) => res as PremiumTransaction[]);
    return this.httpMethod.getUrl(`${this.BASE_URL}all-premium-transactions`);
  }

  findByCustomerId(id: number) {
    // return this.httpClient
    //   .get(this.BASE_URL + 'premium-transactions-by-customerid/'+id)
    //   .toPromise()
    //   .then((res) => res as PremiumTransactionExtend[]);
    return this.httpMethod.getUrl(`${this.BASE_URL}premium-transactions-by-customerid/` + id);
  }

  findByCustomerPolicyId(id: number) {
    // return this.httpClient
    //   .get(this.BASE_URL + 'premium-transactions-by-customerid/'+id)
    //   .toPromise()
    //   .then((res) => res as PremiumTransactionExtend[]);
    return this.httpMethod.getUrl(`${this.BASE_URL}premium-transactions/` + id);
  }

  count() {
    return this.httpClient
      .get(this.BASE_URL + 'count')
      .toPromise()
      .then((res) => res as number);
  }

}
