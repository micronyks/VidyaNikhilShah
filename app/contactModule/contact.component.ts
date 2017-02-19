import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
@Component({
  moduleId: module.id,
  styleUrls:['contact.component.css'],
  templateUrl:'contact.component.html'
})

export class ContactComponent {
  zoom: number = 18;
  
  lat: number = 23.071020;
  lng: number = 72.539392;
 
}