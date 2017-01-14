import { Component,ViewEncapsulation } from '@angular/core';
import {Input, trigger, animate, style, transition, state} from '@angular/core';
@Component({
  moduleId:module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'my-app',
   animations: [
       trigger('openClose', [
           state('void, closed', style({ width: "4%" })),
           state('open', style({ width: '30%' })),
           transition('* => *', animate('500ms ease-out'))
       ])
   ],
  styleUrls:['app.component.css'],
  templateUrl: 'app.component.html'
 })
export class AppComponent {
    open:boolean=false;
      constructor(){ }
      toggle() {
        this.open = !this.open;
    }
}