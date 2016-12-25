import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';


import {SharedModule} from './sharedModule/shared.module';
import {AppRoutingModule} from './app.routing';
import { HomeComponent }  from './homeModule/home.component';
import {CoupleComponent} from './coupleModule/couple.component';
import {EventsComponent} from './eventsModule/event.component';
import {ParentsComponent} from './parentsModule/parent.component';
import {GalleryComponent} from './galleryModule/gallery.component';
import {ContactComponent} from './contactModule/contact.component';



@NgModule({
  imports:      [ BrowserModule,SharedModule,AppRoutingModule ],
  declarations: [ AppComponent,HomeComponent,CoupleComponent,EventsComponent,ParentsComponent,
                  GalleryComponent,ContactComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
