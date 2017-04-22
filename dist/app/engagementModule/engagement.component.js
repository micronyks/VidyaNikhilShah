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
var core_2 = require("@angular/core");
var shared_service_1 = require("../sharedModule/shared.service");
var EngagementComponent = (function () {
    function EngagementComponent(ss) {
        this.ss = ss;
        this.images = [
            { 'title': '', path: '../public/images/h13.jpg' },
            { 'title': '', path: '../public/images/h11.jpg' },
            { 'title': '', path: '../public/images/h12.jpg' },
            { 'title': '', path: '../public/images/h2.jpg' },
            { 'title': '', path: '../public/images/h3.jpg' },
            { 'title': '', path: '../public/images/h4.jpg' },
            { 'title': '', path: '../public/images/h5.jpg' },
            { 'title': '', path: '../public/images/h6.jpg' },
            { 'title': '', path: '../public/images/h15.jpg' },
            { 'title': '', path: '../public/images/h16.jpg' },
            { 'title': '', path: '../public/images/h17.jpg' },
            { 'title': '', path: '../public/images/h18.jpg' },
            { 'title': '', path: '../public/images/h19.jpg' },
            { 'title': '', path: '../public/images/h20.jpg' },
            { 'title': '', path: '../public/images/h21.jpg' },
            { 'title': '', path: '../public/images/h22.jpg' },
            { 'title': '', path: '../public/images/h24.jpg' },
            { 'title': '', path: '../public/images/h25.jpg' },
            { 'title': '', path: '../public/images/h26.jpg' },
            { 'title': '', path: '../public/images/h27.jpg' },
            { 'title': '', path: '../public/images/h28.jpg' },
            { 'title': '', path: '../public/images/h29.jpg' },
            { 'title': '', path: '../public/images/h30.jpg' },
            { 'title': '', path: '../public/images/h31.jpg' },
            { 'title': '', path: '../public/images/h33.jpg' },
            { 'title': '', path: '../public/images/h34.jpg' },
            { 'title': '', path: '../public/images/h35.jpg' },
            { 'title': '', path: '../public/images/h36.jpg' },
            { 'title': '', path: '../public/images/h37.jpg' },
            { 'title': '', path: '../public/images/h38.jpg' },
            { 'title': '', path: '../public/images/h43  .jpg' },
        ];
    }
    Object.defineProperty(EngagementComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    EngagementComponent.prototype.ngOnInit = function () {
        this.ss.hideLoader();
    };
    EngagementComponent.prototype.ngDestroy = function () {
        this.ss.showLoader();
    };
    return EngagementComponent;
}());
__decorate([
    core_2.HostBinding('@routeAnimation'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], EngagementComponent.prototype, "routeAnimation", null);
EngagementComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        //encapsulation:ViewEncapsulation.None,
        styleUrls: ['engagement.component.css'],
        templateUrl: 'engagement.component.html',
        animations: [
            core_2.trigger('routeAnimation', [
                core_2.transition(':enter', [
                    core_2.style({
                        opacity: 0,
                    }),
                    core_2.animate('2s ease-out')
                ]),
                core_2.transition(':leave', [
                    core_2.animate('3s ease-out', core_2.style({
                        opacity: 0,
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [shared_service_1.SharedService])
], EngagementComponent);
exports.EngagementComponent = EngagementComponent;
