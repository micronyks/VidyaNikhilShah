import { Component, ViewEncapsulation, Input, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit, HostBinding, keyframes, trigger, transition, animate, style, state } from '@angular/core';
//import * as $ from 'jquery';
@Component({
  moduleId: module.id,
  selector: 'nxModal',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['nxModal.component.css'],
  templateUrl: 'nxModal.component.html',

})

export class NxModalComponent {
  // @HostBinding('@routeAnimation') get routeAnimation() {
  //   return true;
  // }

  @ViewChildren('pickele') el: QueryList<ElementRef>;

  constructor() {
    console.log('constructor');
  };

  @Input() data: any;
  selectedIndex: number;
  @Input() showWhat: string;
  public visible = false;
  private visibleAnimate = false;

  public show(selectedIndex?: number): void {
    this.selectedIndex = selectedIndex;
    this.visible = true;
    setTimeout(() => {
      this.visibleAnimate = true
    });
  }

  public hide(event: any): void {
    if (this.el != undefined) {
      this.el.forEach(t => {
        t.nativeElement.childNodes.forEach(m => {
          if (m.className = "item active")
            m.className = "item";
        })
      });
    }
    event.stopPropagation();
    this.visibleAnimate = false;
    this.selectedIndex = -1;
    setTimeout(() => this.visible = false, 300);
  }

  nextStopPropagation(event: any) {
    console.log('next');
    event.stopPropagation();
    $('#myCarousel').carousel("next");
  }

  prevStopPropagation(event: any) {
    console.log('prev');
    event.stopPropagation();
    $('#myCarousel').carousel("prev");
  }

}