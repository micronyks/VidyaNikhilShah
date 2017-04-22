"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var shared_module_1 = require("./sharedModule/shared.module");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./homeModule/home.component");
var couple_component_1 = require("./coupleModule/couple.component");
var event_component_1 = require("./eventsModule/event.component");
var parent_component_1 = require("./parentsModule/parent.component");
var gallery_component_1 = require("./galleryModule/gallery.component");
var contact_component_1 = require("./contactModule/contact.component");
var engagement_component_1 = require("./engagementModule/engagement.component");
var primeng_1 = require("primeng/primeng");
var nxModal_module_1 = require("./NxModalModule/nxModal.module");
//import { MaterialModule } from '@angular/material';
var core_2 = require("angular2-google-maps/core");
var animations_1 = require("@angular/platform-browser/animations");
var material_module_1 = require("./materialModule/material.module");
var material_1 = require("@angular/material");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            shared_module_1.SharedModule,
            app_routing_1.AppRoutingModule,
            primeng_1.LightboxModule,
            nxModal_module_1.NxModalModule,
            material_1.MaterialModule.forRoot(),
            material_module_1.MaterialRootModule,
            animations_1.BrowserAnimationsModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyDpVrD7HCGb4nhUtr9WZwO9ARo6OfboLuY'
            })
        ],
        declarations: [
            app_component_1.AppComponent, home_component_1.HomeComponent, couple_component_1.CoupleComponent, event_component_1.EventsComponent, parent_component_1.ParentsComponent,
            gallery_component_1.GalleryComponent, contact_component_1.ContactComponent, engagement_component_1.EngagementComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
