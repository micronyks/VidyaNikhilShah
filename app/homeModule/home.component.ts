import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  OnInit, HostBinding, keyframes,
  trigger, transition, animate,
  style, state
} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'home',
  //encapsulation:ViewEncapsulation.None,
  styleUrls: ['home.component.css'],
  templateUrl: 'home.component.html',
  styles: [`
      p{
        text-align:"center";
      }
      `
  ],

  animations: [
    trigger('time', [
      transition("* => *",
        animate(1000, keyframes([
          style({ opacity: '1', offset: 0.50 }),
          style({ opacity: '0', offset: 1 })
        ]))
      )
    ]),

  ]
})
export class HomeComponent {

}