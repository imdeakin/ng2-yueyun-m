/**
 * Created by deakin on 17-2-27.
 */
import { Component, OnInit } from '@angular/core';

import { Case } from './case';

import { CaseServer } from './case-server';

import { ApiConfig } from '../../serv/api-config';

@Component({
  selector: 'case-page',
  templateUrl: './case-page.component.html',
  styleUrls: ['./case-page.component.css']
})
export class CasePageComponent implements OnInit {
  public cases: Case[];

  public imgRoot: string = ApiConfig.imgRoot;
  public getImgFullPath = ApiConfig.getImgFullPath;

  constructor(private caseServer: CaseServer) {
  }

  public ngOnInit(): void {
    this.getCaseList();
  }

  public getCaseList() {
    let $this = this;
    this.caseServer.getCaseList((cases: Case[]) => {
      $this.cases = cases;
    });
  }
}
