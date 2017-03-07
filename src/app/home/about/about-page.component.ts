/**
 * Created by deakin on 17-2-27.
 */
import { Component } from '@angular/core';

import { AboutItem } from './about-item';
import { CountServer } from '../../serv/count-server';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
  public content: string = '广州悦云信息科技立足于提供整套移动互联网定制研发解决方案—我们专注于APP行业应用开发、' +
    '软件定制开发企业资源计划ERP开发、微信应用开发、网站建设等。我们专业提供一条龙服务，' +
    '从企业品牌规划、交互设计、视觉设计、动效创意，到程序开发、运营维护等。';

  public aboutItems: AboutItem[] = [
    new AboutItem(
      '/assets/img/品牌策划.png',
      '企业品牌策划',
      ''
    ),
    new AboutItem(
      '/assets/img/交互设计.png',
      '交互设计',
      ''
    ),
    new AboutItem(
      '/assets/img/视觉设计.png',
      '视觉设计',
      ''
    ),
    new AboutItem(
      '/assets/img/运营维护.png',
      '运营维护',
      ''
    ),
    new AboutItem(
      '/assets/img/程序开发.png',
      '程序开发',
      '',
    ),
    new AboutItem(
      '/assets/img/动效创意.png',
      '动效创意',
      ''
    )
  ];

  constructor(public countServer: CountServer) {
  }
}
