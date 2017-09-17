import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule, HttpModule }    from '@angular/http';

import { AppComponent, MapToIterable }  from './app.component';
import {  }  from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    MapToIterable
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
