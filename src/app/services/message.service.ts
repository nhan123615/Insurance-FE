import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Message } from '../entities/message.entity';
import { Messages } from '../entities/messages.entity';
import { HttpObservablesService } from './http-method/http-observables.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private BASE_URL: string = environment.BASE_URL + '/message/';

  constructor(private httpClient: HttpClient, private httpMethod: HttpObservablesService) { }

  findAll() {
    // return this.httpClient
    //   .get(this.BASE_URL + 'all-messages')
    //   .toPromise()
    //   .then((res) => res as Message[]);
    return this.httpMethod.getUrl(this.BASE_URL + 'all-messages');
  }

  findAlls() {
    // return this.httpClient
    //   .get(this.BASE_URL + 'all-messages')
    //   .toPromise()
    //   .then((res) => res as Messages[]);
    return this.httpMethod.getUrl(this.BASE_URL + 'all-messages');
  }

  details(id: number) {
    // return this.httpClient
    //   .get(this.BASE_URL + 'message-details/' + id)
    //   .toPromise()
    //   .then((res) => res as Message);
    return this.httpMethod.getUrl(this.BASE_URL + 'message-details/'+id);
  }

  findByStatus(status: boolean) {
    // return this.httpClient
    //   .get(this.BASE_URL + 'messages/' + status)
    //   .toPromise()
    //   .then((res) => res as Message[]);
    return this.httpMethod.getUrl(this.BASE_URL + 'message/'+status);
  }

  count() {
    // return this.httpClient
    //   .get(this.BASE_URL + 'count')
    //   .toPromise()
    //   .then((res) => res as number);
    return this.httpMethod.getUrl(this.BASE_URL + 'count');
  }
}
