import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
@Component({
  moduleId: module.id,
  //selector: 'home',
  styleUrls:['couple.component.css'],
  templateUrl:'couple.component.html',
  animations: [
    trigger('routeAnimation', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'scale(0)'
        }),
        animate('2s')
      ]),
      transition('* => void', [
        animate('1s', style({
          opacity: 0,
          transform: 'scale(0)'
        }))
      ])
    ])
  ]
})
export class CoupleComponent { 
nikhilimgpath:string="./public/images/nyks.jpg";
vidyaimgpath:string="./public/images/vd.jpg";
@HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }
  @HostBinding('style.display') get display() {
    return 'block';
  }
  @HostBinding('style.position') get position() {
    return 'absolute';
  }

  constructor(private router:Router){}

  redirectToEvents()
  {
      this.router.navigate(['events']);
  }
 
}