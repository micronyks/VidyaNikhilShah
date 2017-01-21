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

  

  images: any;
  messages: any;

 
nikhilimgpath:string="./public/images/2.jpg";
vidyaimgpath:string="./public/images/vd.jpg";
@ViewChild(NxModalComponent) public readonly modal: NxModalComponent; 
  pics:any;
@HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }
   constructor(private router:Router){
    
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

  

   
  
    
}