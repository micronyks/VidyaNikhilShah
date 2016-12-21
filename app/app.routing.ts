import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './homeModule/home.component';




const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full'},
  {
        path: "home",
        component: HomeComponent
  },
  //{ path: 'dashboard',  component: DashboardComponent },
  //{ path: 'couples', loadChildren:'app/coupleModule/couple.module'},
  
  //{path:'contact', loadChildren:'app/contact/contact.module' }
  
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