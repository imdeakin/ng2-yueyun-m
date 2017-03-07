/**
 * Created by Administrator on 2017/3/3.
 */
import { Injectable } from '@angular/core';

import { ApiServer } from '../../serv/api-server';
import { ApiConfig } from '../../serv/api-config';
import { ReqOpts } from '../../serv/req-opts';

import { Partner } from './partner';

@Injectable()
export class PartnerServer {

    constructor(private apiServer: ApiServer) {
    };

    public getPartners(success: any, failure?: any) {
        let options: ReqOpts = {
            url: ApiConfig.apiPath.getPartnerList,
            success: (data: Partner[]) => {
                success(data);
            },
            failure: () => {
                console.error('Get partner list error!');
            }
        };
        this.apiServer.get(options);
    }
}
