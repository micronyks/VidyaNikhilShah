import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  OnInit, HostBinding,
  trigger, transition, animate,
  style, state, keyframes
} from '@angular/core';
import { NxModalComponent } from '../NxModalModule/nxModal.component';
@Component({
  moduleId: module.id,
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
          // style({ transform: 'scale(0.10)', offset: 0.80 }),
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
          // style({ left: '85px', offset: 0.80 }),
          style({ left: '40px', offset: 0.90 }),
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
          style({ right: '40px', offset:  0.90}),
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


  nikhilimgpath: string = "./public/images/2.jpg";
  vidyaimgpath: string = "./public/images/vd.jpg";
  @ViewChild(NxModalComponent) public readonly modal: NxModalComponent;
  pics: any;
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }
  constructor(private router: Router) {

    setInterval(() => {
      this.heartState = !this.heartState;
    }, 3000)

    this.pics =
      [

        { 'title': '', path: '../public/images/vns1.jpg' },
        { 'title': '', path: '../public/images/vns2.jpg' },
        { 'title': '', path: '../public/images/vns3.jpg' },
        { 'title': '', path: '../public/images/vns4.jpg' },
        { 'title': '', path: '../public/images/vns5.jpg' },
        { 'title': '', path: '../public/images/vns6.jpg' },
        { 'title': '', path: '../public/images/vns7.jpg' },
        { 'title': '', path: '../public/images/vns8.jpg' },
        { 'title': '', path: '../public/images/vns9.jpg' },
        { 'title': '', path: '../public/images/vns10.jpg' },
        { 'title': '', path: '../public/images/vns11.jpg' },
        { 'title': '', path: '../public/images/vns12.jpg' },
      ]


  }

  redirectToEvents() {
    this.router.navigate(['events']);
  }






}