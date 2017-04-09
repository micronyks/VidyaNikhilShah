import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  OnInit, HostBinding,
  trigger, transition, animate,
  style, state
} from '@angular/core';
import { SharedService } from '../sharedModule/shared.service';
@Component({
  moduleId: module.id,
  //selector: 'home',
  //encapsulation:ViewEncapsulation.None,
  styleUrls: ['event.component.css'],
  templateUrl: 'event.component.html',
  animations: [
    trigger('routeAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(100%)'
        }),
        animate('1s ease-in')
      ]),
      transition(':leave', [
        animate('1s ease-out', style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }))
      ])
    ])
  ]
})
export class EventsComponent {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  constructor(private ss: SharedService) { }
  ngOnInit() {
    this.ss.hideLoader();
  }

  ngDestroy() {
    this.ss.showLoader();
  }


}