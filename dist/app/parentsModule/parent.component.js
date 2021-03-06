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
var nxModal_component_1 = require("../NxModalModule/nxModal.component");
var shared_service_1 = require("../sharedModule/shared.service");
var ParentsComponent = (function () {
    function ParentsComponent(ss) {
        this.ss = ss;
        this.what = "family";
        this.showModal = false;
        this.nikhilsFamilyMembers =
            [
                { 'name': 'Ramesh Shah', path: '../public/images/nyks.jpg' },
                { 'name': 'Madhu Shah', path: '../public/images/nyks.jpg' },
            ];
        this.vidyasFamilyMembers =
            [
                { 'name': 'Prabhakaran Pillai', path: '../public/images/nyks.jpg' },
                { 'name': 'Santa Pillai', path: '../public/images/nyks.jpg' },
            ];
        this.paretsTestimony = {
            husband: {
                husbandName: "Late Shri. Rameshchandra",
                husbandPic: {
                    background: "url('../public/images/papa.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "57% -7%",
                    borderRadius: '50%',
                    width: "100%",
                    height: "90%"
                },
                comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my son\""
            },
            wife: {
                wifeName: "Smt. Madhu",
                wifePic: {
                    background: "url('../public/images/21.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "50% 40%",
                    borderRadius: '50%',
                    width: "100%",
                    height: "90%"
                },
                comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my son\""
            },
        },
            this.rajeshTestimony = {
                husband: {
                    husbandName: "Late Shri. Rajesh",
                    // husbandPic: {
                    //   background: "url('../public/images/rk.jpg')",
                    //   backgroundRepeat: 'no-repeat',
                    //   backgroundPosition: "49% 17%",
                    //   borderRadius: '50%',
                    //   width: "70%",
                    //   height: "90%"
                    // },
                    husbandPic: 'rajeshpic',
                    comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my son\""
                }
            };
        this.vidyaParetsTestimony = {
            husband: {
                husbandName: "Shri. Prabhakaran",
                husbandPic: {
                    background: "url('../public/images/8.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "68.6% 54%",
                    borderRadius: '50%',
                    width: "100%",
                    height: "90%"
                },
                comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my daughter\""
            },
            wife: {
                wifeName: "Smt. Santha",
                wifePic: {
                    background: "url('../public/images/23.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "92.6% 32%",
                    borderRadius: '50%',
                    width: "100%",
                    height: "90%"
                },
                comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my daughter\""
            },
        },
            this.vineetTestimony = {
                husband: {
                    husbandName: "Mr. Vineet",
                    // husbandPic: {
                    //   background: "url('../public/images/25.jpg')",
                    //   backgroundRepeat: 'no-repeat',
                    //   backgroundPosition: "53.6% 26%",
                    //   borderRadius: '50%',
                    //   width: "70%",
                    //   height: "90%"
                    // },
                    husbandPic: "vinithpic",
                    comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my sister\""
                }
            };
        this.heenaFamily = {
            husband: {
                husbandName: "Mr. Nilesh",
                husbandPic: {
                    background: "url('../public/images/15.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "16.6% 13%",
                    borderRadius: '50%',
                    width: "100%",
                    height: "90%"
                },
                comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my brother-in-law\""
            },
            wife: {
                wifeName: "Mrs. Heena",
                wifePic: {
                    background: "url('../public/images/58.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "88.6% 26%",
                    borderRadius: '50%',
                    width: "100%",
                    height: "90%"
                },
                comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my brother\""
            },
            child1: {
                child1Name: "Jay",
                child1Pic: {
                    background: "url('../public/images/22.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "10.6% 39%",
                    borderRadius: '50%',
                    width: "100%",
                    height: "90%"
                },
                comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my uncle\""
            },
        },
            this.reenaFamily = {
                husband: {
                    husbandName: "Mr. Sunand",
                    husbandPic: {
                        background: "url('../public/images/13.jpg')",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: "75.6% 20%",
                        borderRadius: '50%',
                        width: "100%",
                        height: "90%"
                    },
                    comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my brother-in-law\""
                },
                wife: {
                    wifeName: "Mrs. Reena",
                    wifePic: {
                        background: "url('../public/images/12.jpg')",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: "22.6% 27%",
                        borderRadius: '50%',
                        width: "100%",
                        height: "90%"
                    },
                    comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my brother\""
                },
                child1: {
                    child1Name: "Sanvi",
                    child1Pic: {
                        background: "url('../public/images/20.jpg')",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: "57.6% 64%",
                        borderRadius: '50%',
                        width: "100%",
                        height: "90%"
                    },
                    comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my uncle\""
                }
            };
        this.monikaFamily = {
            husband: {
                husbandName: "Mr. Nilay",
                husbandPic: {
                    background: "url('../public/images/14.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "21.6% 17%",
                    borderRadius: '50%',
                    width: "100%",
                    height: "90%"
                },
                comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my brother-in-law\""
            },
            wife: {
                wifeName: "Mrs. Monika",
                wifePic: {
                    background: "url('../public/images/14.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "79.6% 28%",
                    borderRadius: '50%',
                    width: "100%",
                    height: "90%"
                },
                comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my brother\""
            },
            child1: {
                child1Name: "Aarav",
                child1Pic: {
                    background: "url('../public/images/14.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "47% 66%",
                    borderRadius: '50%',
                    width: "100%",
                    height: "90%"
                },
                comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my uncle\""
            }
        };
        this.amitFamily = {
            husband: {
                husbandName: "Mr. Amit",
                husbandPic: {
                    background: "url('../public/images/16.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "16% 19%",
                    borderRadius: '50%',
                    width: "100%",
                    height: "90%"
                },
                comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my bother\""
            },
            wife: {
                wifeName: "Mrs. Pinkal",
                wifePic: {
                    background: "url('../public/images/16.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "85% 29%",
                    borderRadius: '50%',
                    width: "100%",
                    height: "90%"
                },
                comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my brother-in-law\""
            },
            child1: {
                child1Name: "Dhruv",
                child1Pic: {
                    background: "url('../public/images/24.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "66.6% 53%",
                    borderRadius: '50%',
                    width: "100%",
                    height: "90%"
                },
                comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my uncle\""
            },
            child2: {
                child2Name: "Dhweep",
                child2Pic: {
                    background: "url('../public/images/24.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "44% 57%",
                    borderRadius: '50%',
                    width: "100%",
                    height: "90%"
                },
                comment: "\"I cordially invite your gracious presence and blessings at the wedding ceremony of my uncle\""
            }
        };
    }
    Object.defineProperty(ParentsComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    ParentsComponent.prototype.ngOnInit = function () {
        this.ss.hideLoader();
    };
    ParentsComponent.prototype.ngOnDestroy = function () {
        this.ss.showLoader();
    };
    ParentsComponent.prototype.show = function (data) {
        var _this = this;
        console.log(data);
        this.data = data;
        this.showModal = true;
        setTimeout(function () {
            _this.modal.show(1);
        }, 200);
    };
    return ParentsComponent;
}());
__decorate([
    core_1.ViewChild(nxModal_component_1.NxModalComponent),
    __metadata("design:type", nxModal_component_1.NxModalComponent)
], ParentsComponent.prototype, "modal", void 0);
__decorate([
    core_2.HostBinding('@routeAnimation'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ParentsComponent.prototype, "routeAnimation", null);
ParentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        encapsulation: core_1.ViewEncapsulation.None,
        styleUrls: ['parent.component.css'],
        templateUrl: 'parent.component.html',
        animations: [
            core_2.trigger('routeAnimation', [
                core_2.transition(':enter', [
                    core_2.style({
                        opacity: 0,
                        transform: 'translateY(-100%)'
                    }),
                    core_2.animate('1s ease-in-out')
                ]),
                core_2.transition(':leave', [
                    core_2.animate('1s ease-in-out', core_2.style({
                        opacity: 0,
                        transform: 'translateY(100%)'
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [shared_service_1.SharedService])
], ParentsComponent);
exports.ParentsComponent = ParentsComponent;
