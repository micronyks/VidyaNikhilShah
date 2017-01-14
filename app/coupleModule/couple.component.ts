import { Component,ViewChild} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { OnInit, HostBinding,
         trigger, transition, animate,
         style, state,keyframes } from '@angular/core';
import {NxModalComponent} from '../NxModalModule/nxModal.component';
@Component({
  moduleId: module.id,
  //selector: 'home',
  styleUrls:['couple.component.css'],
  templateUrl:'couple.component.html',
  animations: [
    trigger('routeAnimation', [
      transition(':enter', [
        style({
          opacity: 1,
        }),
        animate('1s ease-in')
      ]),
      transition(':leave', [
        animate('1s', style({
          opacity: 0,
          transform: 'scale(0)'
        }))
      ])
     
    ]),
     trigger('time', [
      transition("* => *",
        animate(1000, keyframes([
          style({ opacity: '1', offset: 0.50 }),
          style({ opacity: '0', offset: 1 })
        ]))
      )
    ]),
  ],
  
})
export class CoupleComponent { 

  time: any;
  date1: any;
  date2: any;
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  milliseconds: any;

  images: any;
  messages: any;

  private triggerSecond = 'zoomin';
  triggerAnimMin: string = 'zoomin';
nikhilimgpath:string="./public/images/2.jpg";
vidyaimgpath:string="./public/images/vd.jpg";
@ViewChild(NxModalComponent) public readonly modal: NxModalComponent; 
  pics:any;
@HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }
   constructor(private router:Router){
     setInterval(() => {
      this.count()
    }, 1000)


      this.pics=
    [
     
      {'title':'',path:'../public/images/vns1.jpg'},
      {'title':'',path:'../public/images/vns2.jpg'},
      {'title':'',path:'../public/images/vns3.jpg'},
      {'title':'',path:'../public/images/vns4.jpg'},
      {'title':'',path:'../public/images/vns5.jpg'},
      {'title':'',path:'../public/images/vns6.jpg'},
      {'title':'',path:'../public/images/vns7.jpg'},
      {'title':'',path:'../public/images/vns8.jpg'},
      {'title':'',path:'../public/images/vns9.jpg'},
      {'title':'',path:'../public/images/vns10.jpg'},
      {'title':'',path:'../public/images/vns11.jpg'},
      {'title':'',path:'../public/images/vns12.jpg'},
    ]


   }

  redirectToEvents()
  {
      this.router.navigate(['events']);
  }

  count() {
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

  }

   
  
    
}