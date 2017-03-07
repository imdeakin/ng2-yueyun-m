/**
 * Created by Administrator on 2017/2/28.
 */
export class Partner {
  constructor(public logo: string, //logo的地址
              public id?: string,
              public type?: number, // 公司性质 0 ：上市公司  1 ：非上市公司
              public name?: string, // 名称
              public companyUrl?: string // 公司网站地址
  ) {
  }
}
