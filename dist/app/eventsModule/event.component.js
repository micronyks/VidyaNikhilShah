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
var EventsComponent = (function () {
    function EventsComponent(ss) {
        this.ss = ss;
    }
    Object.defineProperty(EventsComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    EventsComponent.prototype.ngOnInit = function () {
        this.ss.hideLoader();
    };
    EventsComponent.prototype.ngDestroy = function () {
        this.ss.showLoader();
    };
    return EventsComponent;
}());
__decorate([
    core_2.HostBinding('@routeAnimation'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], EventsComponent.prototype, "routeAnimation", null);
EventsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        //selector: 'home',
        encapsulation: core_1.ViewEncapsulation.Emulated,
        styleUrls: ['event.component.css'],
        templateUrl: 'event.component.html',
        animations: [
            core_2.trigger('routeAnimation', [
                core_2.transition(':enter', [
                    core_2.style({
                        opacity: 0,
                        transform: 'translateY(100%)'
                    }),
                    core_2.animate('1s ease-in')
                ]),
                core_2.transition(':leave', [
                    core_2.animate('1s ease-out', core_2.style({
                        opacity: 0,
                        transform: 'translateY(-100%)'
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [shared_service_1.SharedService])
], EventsComponent);
exports.EventsComponent = EventsComponent;
