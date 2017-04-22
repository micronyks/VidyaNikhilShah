import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  OnInit, HostBinding, keyframes,
  trigger, transition, animate,
  style, state
} from '@angular/core';
import { SharedService } from '../sharedModule/shared.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  //encapsulation:ViewEncapsulation.None,
  styleUrls: ['engagement.component.css'],
  templateUrl: 'engagement.component.html',
  animations: [
    trigger('routeAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('2s ease-out')
      ]),
      transition(':leave', [
        animate('3s ease-out', style({
          opacity: 0,
        }))
      ])
    ])
  ]
})
export class EngagementComponent {
  images: any;
  messages: any;
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  constructor(private ss: SharedService) {
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
    ]
  }

  ngOnInit() {
    this.ss.hideLoader();
  }

  ngDestroy() {
    this.ss.showLoader();
  }
}