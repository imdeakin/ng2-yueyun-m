/**
 * Created by Administrator on 2017/3/2.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiData } from './api-data';
import { ReqOpts } from './req-opts';

@Injectable()
export class ApiServer {
  private headers = new Headers({'content-type': 'application/x-www-form-urlencoded'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {
  }

  /**
   * post 请求
   * @param options
   */
  public post(options: ReqOpts) {
    this._post(options.url, options.data)
      .subscribe(
        // 请求成功 解析服务器响应数据
        (data: ApiData, callBack = this.extactReqData) => {
          callBack(data, options.success, options.failure);
        },
        // 请求出错
        (err) => {
          if (options.error) {
            options.error(err);
          }
        }
      );
  }

  /**
   * get 请求
   * @param options
   */
  public get(options: ReqOpts) {
    this._get(options.url).subscribe(
      // 请求成功 解析服务器响应数据
      (data: ApiData, callBack = this.extactReqData) => {
        callBack(data, options.success, options.failure);
      },
      // 请求出错
      (err) => {
        if (options.error) {
          options.error(err);
        }
      }
    );
  }

  /**
   * 设置headers
   * @param options
   */
  public setHeaders(options: any) {
    this.headers = new Headers(options);
    this.updateOptions();
  }

  /**
   * 更新请求的options的参数
   */
  private updateOptions() {
    this.options = new RequestOptions({headers: this.headers});
  }

  /**
   * post请求的实现
   * @param url
   * @param data
   * @returns {Observable<R>}
   * @private
   */
  private _post(url: string, data: string): Observable<ApiData> {
    return this.http.post(url, data, this.options)
      .map(this.extactData);
  }

  /**
   * get请求的实现
   * @param url
   * @returns {Observable<R>}
   * @private
   */
  private _get(url: string): Observable<ApiData> {
    return this.http.get(url)
      .map(this.extactData);
  }

  /**
   * 解析响应数据
   * @param data
   * @param success
   * @param failure
   */
  private extactReqData(data: ApiData, success: any, failure: any) {
    if (data.success) {
      if (success) {
        success(data.root);
      }
    } else {
      if (failure) {
        failure(data.result);
      }
    }
  }

  /**
   * 转化响应数据为json
   * @param res
   * @returns {any}
   */
  private extactData(res: Response): ApiData {
    let data = res.json() as ApiData;
    return data;
  }

  /**
   * 请求出错回调
   * @param error
   * @returns {any}
   */
  private errorHandle(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
