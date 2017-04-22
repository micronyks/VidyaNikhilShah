import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import * as platformBrowser from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './sharedModule/shared.module';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './homeModule/home.component';
import { CoupleComponent } from './coupleModule/couple.component';
import { EventsComponent } from './eventsModule/event.component';
import { ParentsComponent } from './parentsModule/parent.component';
import { GalleryComponent } from './galleryModule/gallery.component';
import { ContactComponent } from './contactModule/contact.component';
import { EngagementComponent } from './engagementModule/engagement.component';
import { LightboxModule } from 'primeng/primeng';
import { ModalModule } from 'ng2-bootstrap';
import { NxModalModule } from './NxModalModule/nxModal.module';
//import { MaterialModule } from '@angular/material';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import { MaterialRootModule } from './materialModule/material.module';
import {
  MaterialModule,
  OverlayContainer,
  FullscreenOverlayContainer,
  MdSelectionModule,
} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    LightboxModule,
    NxModalModule,
    MaterialModule.forRoot(),
    MaterialRootModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpVrD7HCGb4nhUtr9WZwO9ARo6OfboLuY'
    })
  ],
  declarations: [
    AppComponent, HomeComponent, CoupleComponent, EventsComponent, ParentsComponent,
    GalleryComponent, ContactComponent, EngagementComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
