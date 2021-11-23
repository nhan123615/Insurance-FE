import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Role } from '../entities/role.entity';
import { HttpObservablesService } from './http-method/http-observables.service';

@Injectable()
export class RoleService {
  private BASE_URL:string =  environment.BASE_URL + '/role/' ;

  constructor(private httpClient: HttpClient, private httpMethod: HttpObservablesService) { }


  details(id: number) {
    // return this.httpClient
    //   .get(this.BASE_URL + 'find-by-id/' + id)
    //   .toPromise()
    //   .then((res) => res as Role);
    return this.httpMethod.getUrl(this.BASE_URL+'find-by-id/'+id);
  }

  findAll() {
    // return this.httpClient
    //   .get(this.BASE_URL + 'find-all')
    //   .toPromise()
    //   .then((res) => res as Role[]);
    return this.httpMethod.getUrl(this.BASE_URL + 'find-all');
  }

  count() {
    // return this.httpClient
    //   .get(this.BASE_URL + 'count')
    //   .toPromise()
    //   .then((res) => res as number);
   return this.httpMethod.getUrl(this.BASE_URL + 'count');

  }

}
