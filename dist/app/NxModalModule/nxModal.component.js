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
//import * as $ from 'jquery';
var NxModalComponent = (function () {
    function NxModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
        console.log('constructor');
    }
    ;
    NxModalComponent.prototype.show = function (selectedIndex) {
        var _this = this;
        this.selectedIndex = selectedIndex;
        this.visible = true;
        setTimeout(function () {
            _this.visibleAnimate = true;
        });
    };
    NxModalComponent.prototype.hide = function (event) {
        var _this = this;
        // if (this.el != undefined) {
        //   this.el.forEach(t => {
        //     t.nativeElement.childNodes.forEach(m => {
        //       if (m.className = "item active")
        //         m.className = "item";
        //     })
        //   });
        // }
        event.stopPropagation();
        this.visibleAnimate = false;
        this.selectedIndex = -1;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    NxModalComponent.prototype.nextStopPropagation = function (event) {
        console.log('next');
        event.stopPropagation();
        $('#myCarousel').carousel("next");
    };
    NxModalComponent.prototype.prevStopPropagation = function (event) {
        console.log('prev');
        event.stopPropagation();
        $('#myCarousel').carousel("prev");
    };
    return NxModalComponent;
}());
__decorate([
    core_1.ViewChildren('pickele'),
    __metadata("design:type", core_1.QueryList)
], NxModalComponent.prototype, "el", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NxModalComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NxModalComponent.prototype, "showWhat", void 0);
NxModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'nxModal',
        encapsulation: core_1.ViewEncapsulation.Emulated,
        styleUrls: ['nxModal.component.css'],
        templateUrl: 'nxModal.component.html',
    }),
    __metadata("design:paramtypes", [])
], NxModalComponent);
exports.NxModalComponent = NxModalComponent;
