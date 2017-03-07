import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// custom module
import { HomeModule } from './home';

import { ApiServer } from './serv/api-server';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    HttpModule
  ],
  providers: [
    ApiServer
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
