import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './homeModule/home.component';
import {CoupleComponent} from './coupleModule/couple.component';
import {EventsComponent} from './eventsModule/event.component';
import {ParentsComponent} from './parentsModule/parent.component';
import {GalleryComponent} from './galleryModule/gallery.component';
import {ContactComponent} from './contactModule/contact.component';



const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full'},
  {
        path: "home",
        component: HomeComponent
  },
  { path: 'couple',  component: CoupleComponent },
  { path: 'events',  component: EventsComponent},
  { path: 'parents', component: ParentsComponent},

  { path: 'gallery', component: GalleryComponent},
  { path: 'contact', component: ContactComponent},
  
  {path:'**', component: HomeComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{ useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/