/**
 * Created by deakin on 17-2-27.
 */
import {
    Component,
    OnInit
} from '@angular/core';

import { Partner } from './partner';

import { PartnerServer } from './partner-server';

import Swiper from 'swiper';

@Component({
    selector: 'partner-page',
    templateUrl: './partner-page.component.html',
    styleUrls: ['./partner-page.component.css']
})
export class PartnerPageComponent implements OnInit {
    public imgPath: string = '/assets/img';
    public partners: Partner[][];
    public swiper;
    public curSlideIndex: number = 0;

    constructor(private partnerServer: PartnerServer) {
    }

    public ngOnInit(): void {
        this.getPartners();
    }

    /**
     * 切换Slide
     * @param index
     */
    public toggleSlide(index: number) {
        this.swiper.slideTo(index + 1);
    }

    /**
     * 获取partners数据
     */
    private getPartners(): void {
        let $this = this;
        this.partnerServer.getPartners((partners: Partner[]) => {
            $this.partners = $this.groupPartners(partners);
            $this.onSlideReady($this.partners.length);
        });
    }

    /**
     * 将partners按type来分组
     * @param partners
     * @returns {Array}
     */
    private groupPartners(partners: Partner[]) {
        let json = {};
        for (let i = 0, len = partners.length; i < len; i++) {
            let item = partners[i];
            let type = 'type' + item['type'];
            if (!(json[type] instanceof Array)) {
                json[type] = new Array(item);
            } else if (json[type].length <= 9) {
                json[type].push(item);
            }
        }
        let arr = [];
        for (let key in json) {
            arr.push(json[key]);
        }
        return arr;
    }

    /**
     * 初始化Swiper
     */
    private initSwiper() {
        let $this = this;
        this.swiper = new Swiper('#partner-page .swiper-container', {
            loop: true,
            onSlideChangeStart: (swiper) => $this.curSlideIndex = swiper.realIndex
        });
    }

    /**
     * 当所有slide都加入dom完成后初始化Swiper
     * @param slideNum slide的数量 当数量是此值时，就初始化Swiper
     */
    private onSlideReady(slideNum: number) {
        let $this = this;
        let id = setInterval(() => {
            let slides = document.querySelectorAll('#partner-page .swiper-slide');
            if (slides.length === slideNum) {
                clearInterval(id);
                $this.initSwiper();
            }
        }, 500);
    }
}
