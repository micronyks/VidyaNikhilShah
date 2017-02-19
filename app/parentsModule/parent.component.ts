import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
@Component({
  moduleId: module.id,
  //encapsulation:ViewEncapsulation.None,
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
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }
  nikhilsFamilyMembers: any;
  vidyasFamilyMembers: any;
  constructor() {
    this.nikhilsFamilyMembers =
      [
        { 'name': 'Ramesh Shah', path: '../public/images/nyks.jpg' },
        { 'name': 'Madhu Shah', path: '../public/images/nyks.jpg' },
      ];

    this.vidyasFamilyMembers =
      [
        { 'name': 'Prabhakaran Pillai', path: '../public/images/nyks.jpg' },
        { 'name': 'Santa Pillai', path: '../public/images/nyks.jpg' },
      ]

  }

}