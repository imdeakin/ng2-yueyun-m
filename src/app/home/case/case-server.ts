/**
 * Created by Administrator on 2017/3/6.
 */
import { Injectable } from '@angular/core';

import { ApiServer } from '../../serv/api-server';
import { ApiConfig } from '../../serv/api-config';

@Injectable()
export class CaseServer {
  constructor(private apiServer: ApiServer) {
  }

  public getCaseList(success: any, failure?: any): void {
    this.apiServer.post({
      url: ApiConfig.apiPath.getCaseList,
      data: '',
      success: (data) => {
        success(data);
      },
      failure: () => {
        console.error('Get case list error!');
      }
    });
  }
}
