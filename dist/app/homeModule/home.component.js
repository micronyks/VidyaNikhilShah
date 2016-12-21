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
var HomeComponent = (function () {
    function HomeComponent() {
        this.nikhilimgpath = "./public/images/nyks.jpg";
        this.vidyaimgpath = "./public/images/vd.jpg";
    }
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            styleUrls: ['home.component.css'],
            template: "\n     <div>\n                  <div class=\"col-sm-4 text-center\">\n                              <img  [src]=\"nikhilimgpath\" class=\"roundedBorder rotateImg nxImg\"/>\n                  </div>\n                  <div class=\"col-sm-4\">\n                      <md-card class=\"\">\n                        <md-card-title class=\"text-center\">Nikhil Weds Vidya</md-card-title>   \n                        <md-card-content class=\"text-center\">\n                              <p>This is supporting text.</p>\n                               <p>Date: 28-April-2017</p>\n                        </md-card-content>\n                        <md-card-actions class=\"text-center\">\n                              <button md-raised-button color=\"warn\">More Information</button>\n                        </md-card-actions>\n                      </md-card>\n                  </div>\n                  <div class=\"col-sm-4 text-center\">\n                    <img  [src]=\"vidyaimgpath\" class=\"roundedBorder rotateImg nxImg\" />\n                  </div> \n              </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
