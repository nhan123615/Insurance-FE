import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Agent } from '../entities/agent.entity';
import { Result } from "../entities/result.entity";

@Injectable()
export class CommonService {

  constructor() { }
  passingData: any = {}

}
