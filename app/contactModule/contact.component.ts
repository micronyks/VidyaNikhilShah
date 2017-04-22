import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../sharedModule/shared.service';
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
@Component({
  moduleId: module.id,
  styleUrls: ['contact.component.css'],
  templateUrl: 'contact.component.html'
})

export class ContactComponent {
  zoom: number = 18;
  lat: number = 23.071020;
  lng: number = 72.539392;

  constructor(private ss: SharedService) {}

  ngOnInit() {
    this.ss.hideLoader();
  }

  ngDestroy() {
    this.ss.showLoader();
  }
}