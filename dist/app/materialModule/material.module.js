"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
// import {MdIconModule} from '@angular2-material/icon';
// import {MdMenuModule} from '@angular2-material/menu';
// import {MdIconRegistry} from '@angular2-material/icon';
// import {OverlayModule } from '@angular2-material/core';
//import {MdButtonToggleModule} from '@angular2-material/button-toggle/button-toggle';
//import {MdProgressCircleModule} from '@angular2-material/progress-circle/progress-circle';
//import {MdProgressBarModule} from '@angular2-material/progress-bar/progress-bar';
//import {MdInputModule} from '@angular2-material/input';
//import {MdTabsModule} from '@angular2-material/tabs/tabs';
//import {MdToolbarModule} from '@angular2-material/toolbar'; 
//import {MdTooltipModule} from '@angular2-material/tooltip/tooltip';
//import {MdRippleModule} from '@angular2-material/core/ripple/ripple';
//import {PortalModule} from '@angular2-material/core/portal/portal-directives';
//import {OverlayModule} from '@angular2-material/overlay';
//import {RtlModule} from '@angular2-material/core/rtl/dir';
//import {MdCheckboxModule} from '@angular2-material/checkbox/checkbox';
//import {MdRadioModule} from '@angular2-material/radio/radio';
//import {MdSlideToggleModule} from '@angular2-material/slide-toggle/slide-toggle';
//import {MdSliderModule} from '@angular2-material/slider/slider';
//import {MdSidenavModule} from '@angular2-material/sidenav';
////import {MdListModule} from '@angular2-material/list/list';
//import {MdGridListModule} from '@angular2-material/grid-list/grid-list';
//import {MdCardModule} from '@angular2-material/card';
//import {ModalOpenDirective} from './myDirective';
var MATERIAL_MODULES = [
    material_1.MdButtonModule,
];
var MaterialRootModule = (function () {
    function MaterialRootModule() {
    }
    return MaterialRootModule;
}());
MaterialRootModule = __decorate([
    core_1.NgModule({
        imports: [
            material_1.MdButtonModule.forRoot(),
        ],
        declarations: [],
        exports: [MATERIAL_MODULES]
    })
], MaterialRootModule);
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
    return MaterialModule;
}());
MaterialModule = __decorate([
    core_1.NgModule({
        imports: MATERIAL_MODULES,
        exports: MATERIAL_MODULES
    })
], MaterialModule);
exports.MaterialModule = MaterialModule;
