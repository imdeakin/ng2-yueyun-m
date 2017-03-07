/**
 * Created by deakin on 17-2-27.
 */
import {
    Component,
    OnInit,
    AfterViewInit
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

    public ngAfterViewInit(): void {
        this.initSwiper();
    }

    public toggleSlide(index: number) {
        this.swiper.slideTo(index + 1);
    }

    private getPartners(): void {
        let $this = this;
        this.partnerServer.getPartners((partners: Partner[]) => {
            $this.partners = $this.groupPartners(partners);
            this.checkSlideChange($this.partners.length);
        });
    }

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

    private initSwiper() {
        let $this = this;
        this.swiper = new Swiper('#partner-page .swiper-container', {
            loop: true,
            onSlideChangeStart: (swiper) => $this.curSlideIndex = swiper.realIndex
        });
    }

    /**
     * 监测slide数量变化，一旦变化，则重新初始化swiper
     * @param maxLen slide的最大数量，如果 maxLen <= 0 或 当超过这个数时，则停止监测
     */
    private checkSlideChange(maxLen: number) {
        let $this = this;
        let curlen = document.querySelectorAll('#partner-page .swiper-slide').length;
        let id = setInterval(() => {
            let slides = document.querySelectorAll('#partner-page .swiper-slide');
            if (curlen !== slides.length) {
                curlen = slides.length;
                if (maxLen > 0 && maxLen <= curlen) {
                    clearInterval(id);
                }
                if ($this.swiper) {
                    $this.swiper.destroy();
                    $this.initSwiper();
                }
            }
        }, 500);
    }
}
