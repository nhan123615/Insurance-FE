import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Agent } from '../entities/agent.entity';
import { Result } from '../entities/result.entity';
import { HttpObservablesService } from './http-method/http-observables.service';

@Injectable()
export class AgentService {
  private BASE_URL: string = environment.BASE_URL + '/agent/';

  constructor(private httpClient: HttpClient, private httpMethod: HttpObservablesService) {}

  details(id: number) {
    //   return this.httpClient
    //     .get(this.BASE_URL + 'agent-details/' + id)
    //     .toPromise()
    //     .then((res) => res as Agent);
    return this.httpMethod.getUrl(`${this.BASE_URL}agent-details/`+id);
  }

  findAll() {
    // return this.httpClient
    //   .get(this.BASE_URL + 'all-agents')
    //   .toPromise()
    //   .then((res) => res as Agent[]);

    return this.httpMethod.getUrl(`${this.BASE_URL}all-agents`);
  }

  count() {
    // return this.httpClient
    //   .get(this.BASE_URL + 'count')
    //   .toPromise()
    //   .then((res) => res as number);
    return this.httpMethod.getUrl(`${this.BASE_URL}count`);
  }
}
