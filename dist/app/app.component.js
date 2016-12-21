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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            //moduleId:module.id,
            selector: 'my-app',
            //templateUrl: 'app.component.html'
            template: "\n  <md-sidenav-layout>\n\n  <md-sidenav #sidenav mode=\"side\" class=\"app-sidenav\" >\n    <div class=\"sidenav-title\">\n      Wedding\n    </div>\n    <div class=\"sidenav-menu\">\n      <div><a routerLink=\"couples\">The Couple</a></div>\n      <div><a routerLink=\"contact\">Parents</a></div>\n      <div><a routerLink=\"events\">Events</a></div>\n      <div><a routerLink=\"venue\">Venue</a></div>\n      <div><a routerLink=\"gallery\">Gallery</a></div>\n    </div>\n    \n  </md-sidenav>\n\n  <md-toolbar color=\"primary\" class=\"toolbar\">\n    <button class=\"app-icon-button\" (click)=\"sidenav.toggle()\">\n      <i class=\"material-icons app-toolbar-menu\">menu</i>\n    </button>\n  </md-toolbar>\n\n  <div class=\"app-content\">\n    <router-outlet></router-outlet>\n  </div>\n</md-sidenav-layout>\n  \n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
