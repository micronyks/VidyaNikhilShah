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

images: any;
messages:any;
    
private triggerSecond = 'zoomin';
triggerAnimMin:string='zoomin';

  constructor(){

    this.images=[
     
      
      
      
      
      {'title':'',path:'../public/images/h13.jpg'},
      {'title':'',path:'../public/images/h8.jpg'},
      {'title':'',path:'../public/images/h9.jpg'},
      {'title':'',path:'../public/images/h10.jpg'},
      {'title':'',path:'../public/images/h11.jpg'},
      {'title':'',path:'../public/images/h12.jpg'},
      {'title':'',path:'../public/images/h2.jpg'},
      {'title':'',path:'../public/images/h3.jpg'},
      {'title':'',path:'../public/images/h4.jpg'},
      {'title':'',path:'../public/images/h5.jpg'},
      {'title':'',path:'../public/images/h6.jpg'},
      
      
      {'title':'',path:'../public/images/h14.jpg'},
      {'title':'',path:'../public/images/h15.jpg'},
      {'title':'',path:'../public/images/h16.jpg'},
      {'title':'',path:'../public/images/h17.jpg'},
      {'title':'',path:'../public/images/h18.jpg'},
      {'title':'',path:'../public/images/h19.jpg'},
      {'title':'',path:'../public/images/h20.jpg'},
      {'title':'',path:'../public/images/h21.jpg'},
      {'title':'',path:'../public/images/h22.jpg'},
      {'title':'',path:'../public/images/h23.jpg'},
      {'title':'',path:'../public/images/h24.jpg'},
      {'title':'',path:'../public/images/h25.jpg'},
      {'title':'',path:'../public/images/h26.jpg'},
      {'title':'',path:'../public/images/h27.jpg'},
      {'title':'',path:'../public/images/h28.jpg'},
      {'title':'',path:'../public/images/h29.jpg'},
      {'title':'',path:'../public/images/h30.jpg'},
      {'title':'',path:'../public/images/h31.jpg'},
      {'title':'',path:'../public/images/h32.jpg'},
      {'title':'',path:'../public/images/h33.jpg'},
      {'title':'',path:'../public/images/h34.jpg'},
      {'title':'',path:'../public/images/h35.jpg'},
      {'title':'',path:'../public/images/h36.jpg'},
      {'title':'',path:'../public/images/h37.jpg'},
      {'title':'',path:'../public/images/h38.jpg'},
      {'title':'',path:'../public/images/h39.jpg'},
      
        
    ]
   
      
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