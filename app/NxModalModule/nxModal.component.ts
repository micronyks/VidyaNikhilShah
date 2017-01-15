import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  OnInit, HostBinding, keyframes, trigger, transition, animate,  style, state} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'nxModal',
  //encapsulation:ViewEncapsulation.None,
  styleUrls: ['nxModal.component.css'],
  templateUrl: 'nxModal.component.html',
  animations: [
    trigger('routeAnimation', [
      transition('void => *', [
        style({
          opacity: 0.7,
          transform: 'scale(2) !important'
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

export class NxModalComponent {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @Input() data: any;
  selectedIndex: number;
  public visible = false;
  private visibleAnimate = false;

  public show(selectedIndex: number): void {
    this.selectedIndex = selectedIndex;
    this.visible = true;
    setTimeout(() => {
      this.visibleAnimate = true
    });
  }

  public hide(event:any): void {
    event.stopPropagation();
    this.visibleAnimate = false;
    this.selectedIndex = -1;
    setTimeout(() => this.visible = false, 300);
  }

  nextStopPropagation(event:any){
    event.stopPropagation();
   // document.getElementById("myCarousel").carousel("next");
    $('#myCarousel').carousel("next");
  }

  prevStopPropagation(event:any){
    event.stopPropagation();
   // document.getElementById("myCarousel").carousel("next");
    $('#myCarousel').carousel("prev");
  }

}