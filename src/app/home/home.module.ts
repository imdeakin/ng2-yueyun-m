/**
 * Created by deakin on 17-2-27.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

import { HomePageComponent } from './home';
import { AboutPageComponent } from './about';
import { ServicePageComponent } from './service';
import { PartnerPageComponent } from './partner';
import { PartnerListComponent } from './partner/list/partner-list-item.component';
import { CasePageComponent } from './case';
import { ContactPageComponent } from './contact';

import { CountServer } from '../serv/count-server';
import { ContactServer } from './contact/contact-server';
import { PartnerServer } from './partner/partner-server';
import { CaseServer } from './case/case-server';

import {
  PageTitleComponent,
  PageHeaderComponent,
  PageFooterComponent,
  MainFooterComponent,
  DownArrowComponent
} from './common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    HomePageComponent,
    AboutPageComponent,
    ServicePageComponent,
    PartnerPageComponent,
    PartnerListComponent,
    CasePageComponent,
    ContactPageComponent,
    PageTitleComponent,
    PageHeaderComponent,
    PageFooterComponent,
    MainFooterComponent,
    DownArrowComponent
  ],
  providers: [
    CountServer,
    ContactServer,
    PartnerServer,
    CaseServer
  ],
  exports: [HomeComponent]
})
export class HomeModule {

}
