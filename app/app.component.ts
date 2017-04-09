import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import { Input, trigger, animate, style, transition, state, keyframes } from '@angular/core';
import { SharedService } from './sharedModule/shared.service';
@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
  animations: [
    trigger('time', [
      transition("* => *",
        animate(1000, keyframes([
          style({ opacity: '1', offset: 0.50 }),
          style({ opacity: '0', offset: 1 })
        ]))
      )
    ])
  ]
})
export class AppComponent {
  time: any;
  date1: any;
  date2: any;
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  milliseconds: any;
  private triggerSecond = 'zoomin';
  triggerAnimMin: string = 'zoomin';

  constructor(private ss: SharedService) {
    setInterval(() => {
      this.count();
    }, 1000)
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
  ngOnInit() {
    this.ss.hideLoader();
  }

  ngDestroy() {
    this.ss.showLoader();
  }
}