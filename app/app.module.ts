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

import {LightboxModule} from 'primeng/primeng';
import { ModalModule } from 'ng2-bootstrap';
import {NxModalModule} from './NxModalModule/nxModal.module';

@NgModule({
  imports:      [ BrowserModule,SharedModule,AppRoutingModule,LightboxModule,NxModalModule ],
  declarations: [ AppComponent,HomeComponent,CoupleComponent,EventsComponent,ParentsComponent,
                  GalleryComponent,ContactComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
