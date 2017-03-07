/**
 * Created by deakin on 17-2-27.
 */
import { Component, OnInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data = {
    about: {
      title: '关于我们'
    },
    service: {
      title: '我们能做什么'
    },
    partner: {
      title: '合作伙伴'
    },
    case: {
      title: '成功案例'
    },
    contact: {
      title: '联系我们'
    }
  };

  private swiper: any;

  public ngOnInit(): void {
    this.swiper = new Swiper('#main-swiper-con', {
      direction: 'vertical'
    });
  };

}
