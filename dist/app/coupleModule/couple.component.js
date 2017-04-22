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
var router_1 = require("@angular/router");
var core_2 = require("@angular/core");
var nxModal_component_1 = require("../NxModalModule/nxModal.component");
var shared_service_1 = require("../sharedModule/shared.service");
var CoupleComponent = (function () {
    function CoupleComponent(router, ss) {
        var _this = this;
        this.router = router;
        this.ss = ss;
        this.heartState = true;
        this.nikhilimgpath = "./public/images/2.jpg";
        this.vidyaimgpath = "./public/images/vd.jpg";
        this.deviceWidth = window.innerWidth;
        if (!(this.deviceWidth <= 1024)) {
            console.log('Firining');
            setInterval(function () {
                _this.heartState = !_this.heartState;
            }, 3000);
        }
        this.pics =
            [
                { 'title': '', path: '../public/images/vns1.jpg' },
                { 'title': '', path: '../public/images/vns2.jpg' },
                { 'title': '', path: '../public/images/vns3.jpg' },
                { 'title': '', path: '../public/images/vns4.jpg' },
                { 'title': '', path: '../public/images/vns5.jpg' },
                { 'title': '', path: '../public/images/vns6.jpg' },
                { 'title': '', path: '../public/images/vns7.jpg' },
                { 'title': '', path: '../public/images/vns8.jpg' },
                { 'title': '', path: '../public/images/vns9.jpg' },
                { 'title': '', path: '../public/images/vns10.jpg' },
                { 'title': '', path: '../public/images/vns11.jpg' },
                { 'title': '', path: '../public/images/vns12.jpg' },
            ];
    }
    Object.defineProperty(CoupleComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    CoupleComponent.prototype.onResize = function (event) {
        console.log(event.target.innerWidth);
        this.deviceWidth = event.target.innerWidth;
    };
    CoupleComponent.prototype.ngOnInit = function () {
        this.ss.hideLoader();
    };
    CoupleComponent.prototype.ngDestroy = function () {
        this.ss.showLoader();
    };
    CoupleComponent.prototype.redirectToEvents = function () {
        this.router.navigate(['events']);
    };
    return CoupleComponent;
}());
__decorate([
    core_1.ViewChild(nxModal_component_1.NxModalComponent),
    __metadata("design:type", nxModal_component_1.NxModalComponent)
], CoupleComponent.prototype, "modal", void 0);
__decorate([
    core_2.HostBinding('@routeAnimation'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], CoupleComponent.prototype, "routeAnimation", null);
__decorate([
    core_1.HostListener('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CoupleComponent.prototype, "onResize", null);
CoupleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        encapsulation: core_1.ViewEncapsulation.None,
        //selector: 'home',
        styleUrls: ['couple.component.css'],
        templateUrl: 'couple.component.html',
        animations: [
            core_2.trigger('routeAnimation', [
                core_2.transition(':enter', [
                    core_2.style({
                        opacity: 1,
                        transform: 'scale(0)'
                    }),
                    core_2.animate('1s ease-out')
                ]),
                core_2.transition(':leave', [
                    core_2.animate('1s', core_2.style({
                        opacity: 0,
                        transform: 'scale(0)'
                    }))
                ])
            ]),
            core_2.trigger('heartanimation', [
                core_2.transition('void=>*', [
                    core_2.style({
                        opacity: 1,
                        transform: 'scale(0)'
                    }),
                    core_2.animate('3s ease')
                ]),
                core_2.transition('*<=>*', [
                    core_2.animate(3000, core_2.keyframes([
                        core_2.style({ transform: 'scale(0.10)', offset: 0.30 }),
                        core_2.style({ transform: 'scale(1.5)', offset: 0.90 }),
                    ]))
                ]),
            ]),
            core_2.trigger('nikhilpicanimation', [
                core_2.transition('void=>*', [
                    core_2.style({
                        opacity: 1,
                        transform: 'scale(0)'
                    }),
                    core_2.animate('5s ease')
                ]),
                core_2.transition('*<=>*', [
                    core_2.animate(3000, core_2.keyframes([
                        core_2.style({ left: '140px', offset: 0.30 }),
                        core_2.style({ left: '60px', offset: 0.90 }),
                    ]))
                ]),
            ]),
            core_2.trigger('vidyapicanimation', [
                core_2.transition('void=>*', [
                    core_2.style({
                        opacity: 1,
                        transform: 'scale(0)'
                    }),
                    core_2.animate('5s ease')
                ]),
                core_2.transition('*<=>*', [
                    core_2.animate(3000, core_2.keyframes([
                        core_2.style({ right: '140px', offset: 0.30 }),
                        // style({ right: '85px', offset: 0.80 }),
                        core_2.style({ right: '60px', offset: 0.90 }),
                    ]))
                ]),
            ]),
            core_2.trigger('nikhilinfoanimation', [
                core_2.transition('void=>*', [
                    core_2.style({
                        opacity: 1,
                        transform: 'scale(0)'
                    }),
                    core_2.animate('10s ease')
                ]),
            ]),
            core_2.trigger('vidyainfoanimation', [
                core_2.transition('void=>*', [
                    core_2.style({
                        opacity: 1,
                        transform: 'scale(0)'
                    }),
                    core_2.animate('10s ease')
                ]),
            ]),
        ],
    }),
    __metadata("design:paramtypes", [router_1.Router, shared_service_1.SharedService])
], CoupleComponent);
exports.CoupleComponent = CoupleComponent;
