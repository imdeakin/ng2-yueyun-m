/**
 * Created by deakin on 17-2-27.
 */
import { Component } from '@angular/core';

import { ServiceItem } from './service-item';

@Component({
  selector: 'service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent {
  public imgPath: string = '/assets/img';
  public serviceItems: ServiceItem[] = [
    new ServiceItem(
      this.imgPath + '/service_icon_01.png',
      '移动APP开发',
      '致力Android、iosAPP开发<br/>更兼容，更便捷'
    ),
    new ServiceItem(
      this.imgPath + '/service_icon_02.png',
      '定制化开发',
      '根据需求，为您”量身定制“<br/>的个性化的解决方案'
    ),
    new ServiceItem(
      this.imgPath + '/service_icon_03.png',
      '微信定制开发',
      '微信公众号二次开发、微商城<br/>定制、应用号小程序开发'
    ),
    new ServiceItem(
      this.imgPath + '/service_icon_04.png',
      'O2O移动电商',
      '根据企业本身不同的需求<br/>提供多元化的平台解决方案'
    ),
    new ServiceItem(
      this.imgPath + '/service_icon_05.png',
      '物流网定制化开发',
      '根据需求，为您“量身定制”<br/>提供个性化的解决方案'
    ),
    new ServiceItem(
      this.imgPath + '/service_icon_06.png',
      '云服务',
      '根据您的业务需求进行选择<br/>购买适合您的云资源配置'
    )
  ];
}
