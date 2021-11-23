import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PremiumTransaction } from '../entities/premium-transaction.entity';
import { HttpObservablesService } from './http-method/http-observables.service';

@Injectable()
export class PaypalService {
  private BASE_URL: string = environment.BASE_URL + '/payment/paypal/';

  constructor(private httpMethod: HttpObservablesService) { }

  PayPalCheckout(premiumTransactions: any) {
    return this.httpMethod.postUrl(this.BASE_URL + "check-out", premiumTransactions);
  }

}
