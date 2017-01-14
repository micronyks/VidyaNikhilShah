import {Input, Component, trigger, animate, style, transition, state} from '@angular/core';

@Component({
   selector: 'slider',
   
   animations: [
       trigger('openClose', [
           state('void, closed', style({ width: "2%" ,border:'1px solid green'})),
           state('open', style({ width: '100%',border:'1px solid red' })),
           transition('* => *', animate('500ms ease-out'))
       ])
   ],
   template: `
    <div (click)="toggle()">
    
     
     </div>
   `
})
export class Slider {
    @Input('open')
    public open = false;

    @Input() sliderWidth:string;
    @Input() routeroutDiv:string;

    toggle() {
        this.open = !this.open;
    }
    constructor(){
        console.log(this.sliderWidth);
    }
}
