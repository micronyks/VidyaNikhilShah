import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  OnInit, HostBinding,
  trigger, transition, animate,
  style, state
} from '@angular/core';
import { NxModalComponent } from '../NxModalModule/nxModal.component';
import { SharedService } from '../sharedModule/shared.service';

@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['parent.component.css'],
  templateUrl: 'parent.component.html',
  animations: [
    trigger('routeAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }),
        animate('1s ease-in-out')
      ]),
      transition(':leave', [
        animate('1s ease-in-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})

export class ParentsComponent {
  @ViewChild(NxModalComponent) public readonly modal: NxModalComponent;
  what: string = "family";
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }
  nikhilsFamilyMembers: any;
  vidyasFamilyMembers: any;
  paretsTestimony: any;
  rajeshTestimony: any;
  vidyaParetsTestimony: any;
  vineetTestimony: any;
  showModal: boolean = false;
  data: any;
  heenaFamily: any;
  reenaFamily: any;
  amitFamily: any;
  monikaFamily: any;

  constructor(private ss: SharedService) {
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
        comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my son"`
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
        comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my son"`
      },
    },

      this.rajeshTestimony = {
        husband: {
          husbandName: "Late Shri. Rajesh",
          husbandPic: 'rajeshpic',
          comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my son"`
        }
      }

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
        comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my daughter"`

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
        comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my daughter"`
      },
    },

      this.vineetTestimony = {
        husband: {
          husbandName: "Mr. Vineet",
          husbandPic: "vinithpic",
          comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my sister"`
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
        comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my brother-in-law"`

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
        comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my brother"`
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
        comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my uncle"`
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
          comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my brother-in-law"`

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
          comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my brother"`
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
          comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my uncle"`
        }
      }


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
        comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my brother-in-law"`

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
        comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my brother"`
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
        comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my uncle"`
      }
    }

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
        comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my bother"`

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
        comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my brother-in-law"`
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
        comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my uncle"`
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
        comment: `"I cordially invite your gracious presence and blessings at the wedding ceremony of my uncle"`
      }
    }
  }

  ngOnInit() {
    this.ss.hideLoader();
  }
  ngOnDestroy() {
    this.ss.showLoader();
  }

  show(data: any) {
    console.log(data);
    this.data = data;
    this.showModal = true;
    setTimeout(() => {
      this.modal.show(1);
    }, 200)
  }
}