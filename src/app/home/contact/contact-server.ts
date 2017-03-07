/**
 * Created by Administrator on 2017/3/2.
 */
import { Injectable } from '@angular/core';

import { ApiServer } from '../../serv/api-server';
import { ApiConfig } from '../../serv/api-config';
import { ReqOpts } from '../../serv/req-opts';

import { User } from './user';

declare let $: any;
declare let layer: any;

@Injectable()
export class ContactServer {

  constructor(private apiServer: ApiServer) {
  }

  public create(user: User): void {
    let options: ReqOpts = {
      url: ApiConfig.apiPath.contact,
      data: $.param(user),
      success: () => {
        layer.msg('提交成功');
      },
      failure: () => {
        layer.msg('提交失败');
      }
    };

    this.apiServer.post(options);
  }

}
