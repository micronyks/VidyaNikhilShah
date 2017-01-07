import { Component,ViewEncapsulation } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { OnInit, HostBinding,keyframes,
         trigger, transition, animate,
         style, state } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'home',
  //encapsulation:ViewEncapsulation.None,
  styleUrls:['home.component.css'],
  templateUrl: 'home.component.html',
  styles:[`
      p{
        text-align:"center";
      }
      `
  ],

   animations: [
   trigger('time', [
      transition("* => *", 
      animate(1000, keyframes([
        style({opacity:'1',  offset: 0.50}),
        style({opacity:'0',    offset: 1})
      ]))
      )
   ]),
   
  ]
})
export class HomeComponent { 

time:any;
date1:any;
date2:any;
days:any;
hours:any;
minutes:any;
seconds:any;
milliseconds:any;

images: any[];
messages:any;
    
private triggerSecond = 'zoomin';
triggerAnimMin:string='zoomin';

  constructor(){

     this.images = [];
        this.images.push({source:'../public/images/13.jpg', thumbnail: '../public/images/13.jpg', title:'Sopranos 1'});
        this.images.push({source:'../public/images/14.jpg', thumbnail: '../public/images/14.jpg', title:'Sopranos 2'});
        this.images.push({source:'../public/images/15.jpg', thumbnail: '../public/images/15.jpg', title:'Sopranos 3'});
        this.images.push({source:'../public/images/16.jpg', thumbnail: '../public/images/16.jpg', title:'Sopranos 4'});
    
    this.messages=[{}]
      
    setInterval(()=>{
        this.count()
    },1000)      

   
  }
    
  count(){
      this.date1 = new Date('2016-12-31 24:00');
      this.date2 = new Date();
      
      var diffInSeconds = Math.abs(this.date1 - this.date2) / 1000;
      this.days = Math.floor(diffInSeconds / 60 / 60 / 24);
      this.hours = Math.floor(diffInSeconds / 60 / 60 % 24);
      this.minutes = Math.floor(diffInSeconds / 60 % 60);
      this.seconds = Math.floor(diffInSeconds % 60);
      this.milliseconds = Math.round((diffInSeconds - Math.floor(diffInSeconds)) * 1000);
      this.triggerSecond=this.triggerSecond=='zoomin'?'zoomout':'zoomin';
      this.days = ('0' + this.days).slice(-2);
      this.hours=('0' + this.hours).slice(-2);
      this.minutes=('0' + this.minutes).slice(-2);
      this.seconds=('0' + this.seconds).slice(-2);
      
  }
 
}