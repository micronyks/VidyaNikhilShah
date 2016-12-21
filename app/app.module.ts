import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './homeModule/home.component';

import {SharedModule} from './sharedModule/shared.module';
import {AppRoutingModule} from './app.routing';
@NgModule({
  imports:      [ BrowserModule,SharedModule,AppRoutingModule ],
  declarations: [ AppComponent,HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
