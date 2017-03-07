/**
 * Created by deakin on 17-2-27.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent {
  @Input() public title: string;
}
