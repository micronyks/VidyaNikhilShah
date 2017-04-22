"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./homeModule/home.component");
var couple_component_1 = require("./coupleModule/couple.component");
var event_component_1 = require("./eventsModule/event.component");
var parent_component_1 = require("./parentsModule/parent.component");
var gallery_component_1 = require("./galleryModule/gallery.component");
var contact_component_1 = require("./contactModule/contact.component");
var engagement_component_1 = require("./engagementModule/engagement.component");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: "home",
        component: home_component_1.HomeComponent
    },
    { path: 'couple', component: couple_component_1.CoupleComponent },
    { path: 'events', component: event_component_1.EventsComponent },
    { path: 'parents', component: parent_component_1.ParentsComponent },
    { path: 'gallery', component: gallery_component_1.GalleryComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'engagement', component: engagement_component_1.EngagementComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
