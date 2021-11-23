import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Customer } from '../entities/customer.entity';
import { HttpObservablesService } from './http-method/http-observables.service';

@Injectable()
export class CustomerService {
  private BASE_URL: string = environment.BASE_URL + '/customer/';

  constructor(private httpClient: HttpClient, private httpMethod: HttpObservablesService) { }


  details(id: number) {
    // return this.httpClient
    //   .get(this.BASE_URL + 'customer-details/' + id)
    //   .toPromise()
    //   .then((res) => res as Customer);
    return this.httpMethod.getUrl(`${this.BASE_URL}customer-details/${id}`);
  }

  findAll() {
    // return this.httpClient
    //   .get(this.BASE_URL + 'all-customers')
    //   .toPromise()
    //   .then((res) => res as Customer[]);
    return this.httpMethod.getUrl(`${this.BASE_URL}all-customers`);
  }

  detailsbycredentialid(id: number) {
    return this.httpMethod.getUrl(this.BASE_URL + 'customer-details-by-credential-id/' + id);
  }

  updateProfile(id: number, customerToUpdate: Customer) {
    return this.httpClient
      .put(this.BASE_URL + 'customer-update/' + id, customerToUpdate)
      .toPromise()
      .then((res) => res as Customer);
  }

  sendContact(contactForm : any) {
    return this.httpClient
      .post(this.BASE_URL + 'send-contact',contactForm)
      .toPromise()
      .then((res) => res as any);
  }

  count() {
    // return this.httpClient
    //   .get(this.BASE_URL + 'count')
    //   .toPromise()
    //   .then(res => res as number)
    return this.httpMethod.getUrl(`${this.BASE_URL}count`);
  }
}
