import { Component } from '@angular/core';

@Component({
  //moduleId:module.id,
  selector: 'my-app',
  //templateUrl: 'app.component.html'
  template:`
  <md-sidenav-layout>

  <md-sidenav #sidenav mode="side" class="app-sidenav" >
    <div class="sidenav-title">
      Wedding
    </div>
    <div class="sidenav-menu">
      <div><a routerLink="couples">The Couple</a></div>
      <div><a routerLink="contact">Parents</a></div>
      <div><a routerLink="events">Events</a></div>
      <div><a routerLink="venue">Venue</a></div>
      <div><a routerLink="gallery">Gallery</a></div>
    </div>
    
  </md-sidenav>

  <md-toolbar color="primary" class="toolbar">
    <button class="app-icon-button" (click)="sidenav.toggle()">
      <i class="material-icons app-toolbar-menu">menu</i>
    </button>
  </md-toolbar>

  <div class="app-content">
    <router-outlet></router-outlet>
  </div>
</md-sidenav-layout>
  
  `
 })
export class AppComponent {
  
    constructor(){ }
}