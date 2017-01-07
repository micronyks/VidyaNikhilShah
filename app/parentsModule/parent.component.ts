import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  moduleId: module.id,
  //encapsulation:ViewEncapsulation.None,
  styleUrls:['parent.component.css'],
  templateUrl: 'parent.component.html',
})
export class ParentsComponent { 
  nikhilsFamilyMembers:any;
  vidyasFamilyMembers:any;
  constructor(){
    this.nikhilsFamilyMembers=
    [
      {'name':'Ramesh Shah',path:'../public/images/nyks.jpg'},
      {'name':'Madhu Shah',path:'../public/images/nyks.jpg'},
    ];

    this.vidyasFamilyMembers=
    [
      {'name':'Prabhakaran Pillai',path:'../public/images/nyks.jpg'},
      {'name':'Santa Pillai',path:'../public/images/nyks.jpg'},
    ]

  }
 
}