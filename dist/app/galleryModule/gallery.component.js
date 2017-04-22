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
var nxModal_component_1 = require("../NxModalModule/nxModal.component");
var shared_service_1 = require("../sharedModule/shared.service");
var GalleryComponent = (function () {
    function GalleryComponent(ss) {
        this.ss = ss;
        this.what = "album";
        this.data =
            [
                // {'title':'',path:'../public/images/1.jpg'},
                { 'title': '', path: '../public/images/2.jpg' },
                { 'title': '', path: '../public/images/3.jpg' },
                { 'title': '', path: '../public/images/4.jpg' },
                { 'title': '', path: '../public/images/5.jpg' },
                { 'title': '', path: '../public/images/6.jpg' },
                { 'title': '', path: '../public/images/7.jpg' },
                { 'title': '', path: '../public/images/8.jpg' },
                { 'title': '', path: '../public/images/9.jpg' },
                { 'title': '', path: '../public/images/10.jpg' },
                { 'title': '', path: '../public/images/11.jpg' },
                { 'title': '', path: '../public/images/12.jpg' },
                { 'title': '', path: '../public/images/13.jpg' },
                { 'title': '', path: '../public/images/14.jpg' },
                { 'title': '', path: '../public/images/15.jpg' },
                { 'title': '', path: '../public/images/16.jpg' },
                { 'title': '', path: '../public/images/17.jpg' },
                { 'title': '', path: '../public/images/18.jpg' },
                { 'title': '', path: '../public/images/20.jpg' },
                { 'title': '', path: '../public/images/21.jpg' },
                { 'title': '', path: '../public/images/22.jpg' },
                { 'title': '', path: '../public/images/23.jpg' },
                { 'title': '', path: '../public/images/24.jpg' },
                { 'title': '', path: '../public/images/25.jpg' },
                { 'title': '', path: '../public/images/26.jpg' },
                { 'title': '', path: '../public/images/27.jpg' },
                { 'title': '', path: '../public/images/29.jpg' },
                { 'title': '', path: '../public/images/30.jpg' },
                { 'title': '', path: '../public/images/31.jpg' },
                { 'title': '', path: '../public/images/32.jpg' },
                { 'title': '', path: '../public/images/33.jpg' },
                { 'title': '', path: '../public/images/38.jpg' },
                { 'title': '', path: '../public/images/39.jpg' },
                { 'title': '', path: '../public/images/40.jpg' },
                { 'title': '', path: '../public/images/45.jpg' },
                { 'title': '', path: '../public/images/48.jpg' },
                { 'title': '', path: '../public/images/49.jpg' },
                { 'title': '', path: '../public/images/50.jpg' },
                { 'title': '', path: '../public/images/51.jpg' },
                { 'title': '', path: '../public/images/52.jpg' },
                { 'title': '', path: '../public/images/53.jpg' },
                { 'title': '', path: '../public/images/54.jpg' },
                { 'title': '', path: '../public/images/55.jpg' },
                { 'title': '', path: '../public/images/56.jpg' },
                { 'title': '', path: '../public/images/57.jpg' },
                { 'title': '', path: '../public/images/58.jpg' },
                { 'title': '', path: '../public/images/59.jpg' },
                { 'title': '', path: '../public/images/60.jpg' },
                { 'title': '', path: '../public/images/63.jpg' },
            ];
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.ss.hideLoader();
    };
    GalleryComponent.prototype.ngDestroy = function () {
        this.ss.showLoader();
    };
    return GalleryComponent;
}());
__decorate([
    core_1.ViewChild(nxModal_component_1.NxModalComponent),
    __metadata("design:type", nxModal_component_1.NxModalComponent)
], GalleryComponent.prototype, "modal", void 0);
GalleryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        encapsulation: core_1.ViewEncapsulation.None,
        styleUrls: ['gallery.component.css'],
        templateUrl: 'gallery.component.html',
    }),
    __metadata("design:paramtypes", [shared_service_1.SharedService])
], GalleryComponent);
exports.GalleryComponent = GalleryComponent;
