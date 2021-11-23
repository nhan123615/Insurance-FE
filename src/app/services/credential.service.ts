import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Credentiall } from '../entities/credential.entity';
import { HttpObservablesService } from './http-method/http-observables.service';

@Injectable()
export class CredentialService {
  private BASE_URL: string = environment.BASE_URL + '/credential/';

  constructor(private httpMethod: HttpObservablesService, private router: Router,
    private httpClient: HttpClient) { }


  login(body: any) {
    return this.httpMethod.postUrl(`${this.BASE_URL}login`, body);
  }

  register(body: any) {
    return this.httpMethod.postUrl(`${this.BASE_URL}register`, body);
  }

  logout() {
    localStorage.removeItem('credential');
    localStorage.removeItem('accessToken');
    this.router.navigate(['login']);
  }

  activateRequest(body: any) {
    return this.httpMethod.postUrl(`${this.BASE_URL}activate-request`, body);
  }

  activateAccount(body: any) {
    return this.httpMethod.postUrl(`${this.BASE_URL}activate-account`, body);
  }

  resetPasswordRequest(body: any) {
    return this.httpMethod.postUrl(`${this.BASE_URL}reset-password-request`, body);
  }
  resetPassword(body: any) {
    return this.httpMethod.postUrl(`${this.BASE_URL}reset-password`, body);
  }

  verifyActivationCodeAndEmail(body: any) {
    return this.httpMethod.postUrl(`${this.BASE_URL}verify`, body);
  }

  findAll() {
    // return this.httpClient
    //   .get(this.BASE_URL + '/find-all')
    //   .toPromise()
    //   .then((res) => res as Credentiall[]);
    return this.httpMethod.getUrl(`${this.BASE_URL}/verify`);
  }
  count() {
    // return this.httpClient
    //   .get(this.BASE_URL + '/count')
    //   .toPromise()
    //   .then(res => res as number)
    return this.httpMethod.getUrl(`${this.BASE_URL}/count`);
  }

}
