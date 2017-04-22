
import { Component, ViewEncapsulation, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  OnInit, HostBinding, keyframes,
  trigger, transition, animate,
  style, state
} from '@angular/core';
import { NxModalComponent } from '../NxModalModule/nxModal.component';
import { SharedService } from '../sharedModule/shared.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  //encapsulation:ViewEncapsulation.Native,
  styleUrls: ['home.component.css'],
  templateUrl: 'home.component.html',
  styles: [`
      p{
        text-align:"center";
      }
      `
  ],
  animations: [
    trigger('routeAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(1.5)'
        }),
        animate('1s ease-in')
      ]),
      transition(':leave', [
        animate('1s ease-out', style({
          opacity: 0,
          transform: 'scale(1.5)'
        }))
      ])
    ]),
    trigger('time', [
      transition("* => *",
        animate(1000, keyframes([
          style({ opacity: '1', offset: 0.20 }),
          style({ opacity: '0', offset: 0.80 })
        ]))
      )
    ]),
  ]
})
export class HomeComponent {
  @ViewChild(NxModalComponent) public readonly modal: NxModalComponent;
  deviceWidth: number;

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event.target.innerWidth);
    this.deviceWidth = event.target.innerWidth;
  }

  @ViewChild('weddingEle') weddingEle: ElementRef;
  weddingEleHeight: number;
  CoupleNameStr: boolean;
  time: any;
  date1: any;
  date2: any;
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  milliseconds: any;
  showModal: boolean = true;
  what: string = "card";

  private triggerSecond = 'zoomin';
  triggerAnimMin: string = 'zoomin';

  constructor(private router: Router, private ss: SharedService) {
    this.deviceWidth = window.innerWidth;
    setInterval(() => {
      this.count()
    }, 1000)
  }

  count() {
    this.date1 = new Date('2017-06-28 09:00');
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

  // ngAfterViewInit()
  // {
  //   this.printLetterByLetter(this.weddingEle, this.weddingStringTxt, 200)
  // }

  // printLetterByLetter(destination:ElementRef, message:string, speed:number){
  //   let i = 0;

  //   let interval = setInterval(()=>{

  //       destination.nativeElement.innerHTML += message.charAt(i);
  //       i++;
  //       if (i > message.length){
  //           this.weddingEleHeight=destination.nativeElement.offsetHeight;
  //           destination.nativeElement.innerHTML="";
  //           this.printLetterByLetter(this.weddingEle, this.weddingStringTxt, 200);
  //           clearInterval(interval);
  //       }
  //   }, speed);
  // }
  ngAfterViewInit() {
    console.log('this is working as of now');
    this.modal.show();
  }

  ngOnInit() {
    this.ss.hideLoader();
  }

  ngDestroy() {
    this.ss.showLoader();
  }
}