/**
 * Created by Administrator on 2017/2/28.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'down-arrow',
  template: `
    <img src="/assets/img/down-arrow.png">
`,
  styles: [`
    img {
        position: absolute;
        left: 50%;
        bottom: .5rem;
        width: .98rem;
        height: .62rem;
        margin-left: -.49rem;
    }
`]
})
export class DownArrowComponent {

}
