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
var button_1 = require('@angular2-material/button');
var icon_1 = require('@angular2-material/icon');
var menu_1 = require('@angular2-material/menu');
var core_2 = require('@angular2-material/core');
//import {MdButtonToggleModule} from '@angular2-material/button-toggle/button-toggle';
//import {MdProgressCircleModule} from '@angular2-material/progress-circle/progress-circle';
//import {MdProgressBarModule} from '@angular2-material/progress-bar/progress-bar';
var input_1 = require('@angular2-material/input');
//import {MdTabsModule} from '@angular2-material/tabs/tabs';
var toolbar_1 = require('@angular2-material/toolbar');
var sidenav_1 = require('@angular2-material/sidenav');
////import {MdListModule} from '@angular2-material/list/list';
//import {MdGridListModule} from '@angular2-material/grid-list/grid-list';
var card_1 = require('@angular2-material/card');
//import {ModalOpenDirective} from './myDirective';
var MATERIAL_MODULES = [
    button_1.MdButtonModule,
    icon_1.MdIconModule,
    menu_1.MdMenuModule,
    sidenav_1.MdSidenavModule,
    toolbar_1.MdToolbarModule,
    card_1.MdCardModule,
    input_1.MdInputModule
];
var MaterialRootModule = (function () {
    function MaterialRootModule() {
    }
    MaterialRootModule = __decorate([
        core_1.NgModule({
            imports: [
                button_1.MdButtonModule.forRoot(),
                icon_1.MdIconModule.forRoot(),
                menu_1.MdMenuModule.forRoot(),
                sidenav_1.MdSidenavModule.forRoot(),
                toolbar_1.MdToolbarModule.forRoot(),
                icon_1.MdIconModule.forRoot(),
                card_1.MdCardModule.forRoot(),
                input_1.MdInputModule.forRoot(),
                //MdSliderModule.forRoot(),
                //MdSlideToggleModule.forRoot(),
                core_2.OverlayModule.forRoot(),
            ],
            declarations: [],
            exports: [MATERIAL_MODULES]
        }), 
        __metadata('design:paramtypes', [])
    ], MaterialRootModule);
    return MaterialRootModule;
}());
exports.MaterialRootModule = MaterialRootModule;
/***************************************************************** */
var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule.forRoot = function () {
        return {
            ngModule: MaterialRootModule
        };
    };
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: MATERIAL_MODULES,
            exports: MATERIAL_MODULES
        }), 
        __metadata('design:paramtypes', [])
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
