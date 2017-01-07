import { Component ,ViewChild} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { OnInit, HostBinding,keyframes,
         trigger, transition, animate,
         style, state } from '@angular/core';

import {NxModalComponent} from '../NxModalModule/nxModal.component';
@Component({
  moduleId: module.id,
  selector: 'home',
  //encapsulation:ViewEncapsulation.None,
  styleUrls:['gallery.component.css'],
  templateUrl: 'gallery.component.html',
})
export class GalleryComponent {
  

  @ViewChild(NxModalComponent) public readonly modal: NxModalComponent; 
  pics:any;
  constructor(){
    this.pics=
    [
      {'title':'My Heart',path:'../public/images/hearts.png'},
      {'title':'',path:'../public/images/0.jpg'},
      {'title':'',path:'../public/images/1.jpg'},
      {'title':'',path:'../public/images/2.jpg'},
      {'title':'',path:'../public/images/3.jpg'},
      {'title':'',path:'../public/images/4.jpg'},
      {'title':'',path:'../public/images/5.jpg'},
      {'title':'',path:'../public/images/6.jpg'},
      {'title':'',path:'../public/images/7.jpg'},
      {'title':'',path:'../public/images/7.jpg'},
      {'title':'',path:'../public/images/8.jpg'},
      {'title':'',path:'../public/images/9.jpg'},
      {'title':'',path:'../public/images/10.jpg'},
      {'title':'',path:'../public/images/11.jpg'},
      {'title':'',path:'../public/images/12.jpg'},
      {'title':'',path:'../public/images/13.jpg'},
      {'title':'',path:'../public/images/14.jpg'},
      {'title':'',path:'../public/images/15.jpg'}


    ]
  }
 
}