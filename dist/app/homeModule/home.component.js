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
var HomeComponent = (function () {
    function HomeComponent(router, ss) {
        var _this = this;
        this.router = router;
        this.ss = ss;
        this.showModal = true;
        this.what = "card";
        this.triggerSecond = 'zoomin';
        this.triggerAnimMin = 'zoomin';
        this.deviceWidth = window.innerWidth;
        setInterval(function () {
            _this.count();
        }, 1000);
    }
    Object.defineProperty(HomeComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.onResize = function (event) {
        console.log(event.target.innerWidth);
        this.deviceWidth = event.target.innerWidth;
    };
    HomeComponent.prototype.count = function () {
        this.date1 = new Date('2017-06-28 09:00');
        this.date2 = new Date();
        var diffInSeconds = Math.abs(this.date1 - this.date2) / 1000;
        this.days = Math.floor(diffInSeconds / 60 / 60 / 24);
        this.hours = Math.floor(diffInSeconds / 60 / 60 % 24);
        this.minutes = Math.floor(diffInSeconds / 60 % 60);
        this.seconds = Math.floor(diffInSeconds % 60);
        this.milliseconds = Math.round((diffInSeconds - Math.floor(diffInSeconds)) * 1000);
        this.triggerSecond = this.triggerSecond == 'zoomin' ? 'zoomout' : 'zoomin';
        this.days = ('0' + this.days).slice(-2);
        this.hours = ('0' + this.hours).slice(-2);
        this.minutes = ('0' + this.minutes).slice(-2);
        this.seconds = ('0' + this.seconds).slice(-2);
    };
    // ngAfterViewInit()
    // {
    //   this.printLetterByLetter(this.weddingEle, this.weddingStringTxt, 200)
    // }
    // printLetterByLetter(destination:ElementRef, message:string, speed:number){
    //   let i = 0;
    //   let interval = setInterval(()=>{
    //       destination.nativeElement.innerHTML += message.charAt(i);
    //       i++;
    //       if (i > message.length){
    //           this.weddingEleHeight=destination.nativeElement.offsetHeight;
    //           destination.nativeElement.innerHTML="";
    //           this.printLetterByLetter(this.weddingEle, this.weddingStringTxt, 200);
    //           clearInterval(interval);
    //       }
    //   }, speed);
    // }
    HomeComponent.prototype.ngAfterViewInit = function () {
        console.log('this is working as of now');
        this.modal.show();
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.ss.hideLoader();
    };
    HomeComponent.prototype.ngDestroy = function () {
        this.ss.showLoader();
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild(nxModal_component_1.NxModalComponent),
    __metadata("design:type", nxModal_component_1.NxModalComponent)
], HomeComponent.prototype, "modal", void 0);
__decorate([
    core_2.HostBinding('@routeAnimation'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], HomeComponent.prototype, "routeAnimation", null);
__decorate([
    core_1.HostListener('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HomeComponent.prototype, "onResize", null);
__decorate([
    core_1.ViewChild('weddingEle'),
    __metadata("design:type", core_1.ElementRef)
], HomeComponent.prototype, "weddingEle", void 0);
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        //encapsulation:ViewEncapsulation.Native,
        styleUrls: ['home.component.css'],
        templateUrl: 'home.component.html',
        styles: ["\n      p{\n        text-align:\"center\";\n      }\n      "
        ],
        animations: [
            core_2.trigger('routeAnimation', [
                core_2.transition(':enter', [
                    core_2.style({
                        opacity: 0,
                        transform: 'scale(1.5)'
                    }),
                    core_2.animate('1s ease-in')
                ]),
                core_2.transition(':leave', [
                    core_2.animate('1s ease-out', core_2.style({
                        opacity: 0,
                        transform: 'scale(1.5)'
                    }))
                ])
            ]),
            core_2.trigger('time', [
                core_2.transition("* => *", core_2.animate(1000, core_2.keyframes([
                    core_2.style({ opacity: '1', offset: 0.20 }),
                    core_2.style({ opacity: '0', offset: 0.80 })
                ])))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router, shared_service_1.SharedService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
