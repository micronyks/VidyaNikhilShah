import { Component, ViewChild, ViewEncapsulation, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  OnInit, HostBinding,
  trigger, transition, animate,
  style, state, keyframes
} from '@angular/core';
import { NxModalComponent } from '../NxModalModule/nxModal.component';
import { SharedService } from '../sharedModule/shared.service';
@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  //selector: 'home',
  styleUrls: ['couple.component.css'],
  templateUrl: 'couple.component.html',
  animations: [
    trigger('routeAnimation', [
      transition(':enter', [
        style({
          opacity: 1,
          transform: 'scale(0)'
        }),
        animate('1s ease-out')
      ]),
      transition(':leave', [
        animate('1s', style({
          opacity: 0,
          transform: 'scale(0)'
        }))
      ])

    ]),
    trigger('heartanimation', [
      transition('void=>*', [
        style({
          opacity: 1,
          transform: 'scale(0)'
        }),
        animate('3s ease')
      ]),
      transition('*<=>*', [
        animate(3000, keyframes([
          style({ transform: 'scale(0.10)', offset: 0.30 }),
          style({ transform: 'scale(1.5)', offset: 0.90 }),
        ]))
      ]),
    ]),
    trigger('nikhilpicanimation', [
      transition('void=>*', [
        style({
          opacity: 1,
          transform: 'scale(0)'
        }),
        animate('5s ease')
      ]),
      transition('*<=>*', [
        animate(3000, keyframes([
          style({ left: '140px', offset: 0.30 }),
          style({ left: '60px', offset: 0.90 }),
        ]))
      ]),
    ]),
    trigger('vidyapicanimation', [
      transition('void=>*', [
        style({
          opacity: 1,
          transform: 'scale(0)'
        }),
        animate('5s ease')
      ]),
      transition('*<=>*', [
        animate(3000, keyframes([
          style({ right: '140px', offset: 0.30 }),
          // style({ right: '85px', offset: 0.80 }),
          style({ right: '60px', offset: 0.90 }),
        ]))
      ]),
    ]),
    trigger('nikhilinfoanimation', [
      transition('void=>*', [
        style({
          opacity: 1,
          transform: 'scale(0)'
        }),
        animate('10s ease')
      ]),
      //  transition('*<=>*', [
      //    animate(5000, keyframes([
      //     style({ top: '-150px', offset: 0.40 }),
      //     style({ top: '150px', offset: 0.99 }),
      //   ]))
      // ]),
    ]),
    trigger('vidyainfoanimation', [
      transition('void=>*', [
        style({
          opacity: 1,
          transform: 'scale(0)'
        }),
        animate('10s ease')
      ]),
      //  transition('*<=>*', [
      //    animate(5000, keyframes([
      //     style({ bottom: '-150px', offset: 0.40 }),
      //     style({ bottom: '150px', offset: 0.99 }),
      //   ]))
      // ]),
    ]),
  ],

})
export class CoupleComponent {
  images: any;
  messages: any;
  heartState: boolean = true;
  deviceWidth: number;
  nikhilimgpath: string = "/public/images/2.jpg";
  vidyaimgpath: string = "/public/images/vd.jpg";
  @ViewChild(NxModalComponent) public readonly modal: NxModalComponent;
  pics: any;
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event.target.innerWidth);
    this.deviceWidth = event.target.innerWidth;
  }

  constructor(private router: Router, private ss: SharedService) {
    this.deviceWidth = window.innerWidth;
    if (!(this.deviceWidth <= 1024)) {
      console.log('Firining');
      setInterval(() => {
        this.heartState = !this.heartState;
      }, 3000);
    }
    this.pics =
      [

        { 'title': '', path: '/public/images/vns1.JPG' },
        { 'title': '', path: '/public/images/vns2.JPG' },
        { 'title': '', path: '/public/images/vns3.JPG' },
        { 'title': '', path: '/public/images/vns4.JPG' },
        { 'title': '', path: '/public/images/vns5.JPG' },
        { 'title': '', path: '/public/images/vns6.JPG' },
        { 'title': '', path: '/public/images/vns7.JPG' },
        { 'title': '', path: '/public/images/vns8.JPG' },
        { 'title': '', path: '/public/images/vns9.JPG' },
        { 'title': '', path: '/public/images/vns10.JPG' },
        { 'title': '', path: '/public/images/vns11.JPG' },
        { 'title': '', path: '/public/images/vns12.JPG' },
      ]
  }

  ngOnInit() {
    this.ss.hideLoader();
  }

  ngDestroy() {
    this.ss.showLoader();
  }
  
  redirectToEvents() {
    this.router.navigate(['events']);
  }
}
