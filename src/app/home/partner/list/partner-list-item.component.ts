/**
 * Created by Administrator on 2017/3/3.
 */
import { Component, Input } from '@angular/core';

import { Partner } from '../partner';
import { ApiConfig } from '../../../serv/api-config';

@Component({
  selector: 'part-list-item',
  templateUrl: './partner-list-item.component.html',
  styleUrls: ['./partner-list-item.component.css']
})
export class PartnerListComponent {
  @Input() public partners: Partner[];
  public getImgFullPath = ApiConfig.getImgFullPath;
}
