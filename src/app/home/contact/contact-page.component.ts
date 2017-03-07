/**
 * Created by deakin on 17-2-27.
 */
import { Component } from '@angular/core';

import { ContactServer } from './contact-server';
import { User } from './user';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  public user: User = {
    name: 'Deakin',
    phone: '15989029465',
    email: 'deakin@yeah.net',
    word: 'I\'m Deakin'
  };

  constructor(private contactServer: ContactServer) {
  };

  public onSubmit(): void {
    this.contactServer.create(this.user);
  }

}
