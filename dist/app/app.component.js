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
var shared_service_1 = require("./sharedModule/shared.service");
var AppComponent = (function () {
    function AppComponent(ss) {
        var _this = this;
        this.ss = ss;
        this.triggerSecond = 'zoomin';
        this.triggerAnimMin = 'zoomin';
        setInterval(function () {
            _this.count();
        }, 1000);
    }
    AppComponent.prototype.count = function () {
        this.date1 = new Date('2016-12-31 24:00');
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
    AppComponent.prototype.ngOnInit = function () {
        this.ss.hideLoader();
    };
    AppComponent.prototype.ngDestroy = function () {
        this.ss.showLoader();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        encapsulation: core_1.ViewEncapsulation.None,
        selector: 'my-app',
        styleUrls: ['app.component.css'],
        templateUrl: 'app.component.html',
        animations: [
            core_2.trigger('time', [
                core_2.transition("* => *", core_2.animate(1000, core_2.keyframes([
                    core_2.style({ opacity: '1', offset: 0.50 }),
                    core_2.style({ opacity: '0', offset: 1 })
                ])))
            ])
        ]
    }),
    __metadata("design:paramtypes", [shared_service_1.SharedService])
], AppComponent);
exports.AppComponent = AppComponent;
