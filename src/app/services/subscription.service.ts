import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Customer} from "../entities/customer.entity";
import {Subscription} from "../entities/subscription.entity";
import {Result} from "../entities/result.entity";
import { HttpObservablesService } from './http-method/http-observables.service';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private BASE_URL:string =  environment.BASE_URL + '/subscription/' ;
  constructor(private httpClient: HttpClient, private httpMethod: HttpObservablesService) { }

  findAll() {
    // return this.httpClient
    //   .get(this.BASE_URL + 'all-subscriptions')
    //   .toPromise()
    //   .then((res) => res as Subscription[]);
    return this.httpMethod.getUrl(this.BASE_URL + 'all-subscriptions');
  }

  unsubscribe(email: string) {
    // return this.httpClient
    //   .get(this.BASE_URL + 'all-subscriptions')
    //   .toPromise()
    //   .then((res) => res as Result);
    return this.httpMethod.getUrl(this.BASE_URL + 'all-subscriptions');
  }

  count() {
    return this.httpClient
      .get(this.BASE_URL + 'count')
      .toPromise()
      .then((res) => res as number);
  }
}
