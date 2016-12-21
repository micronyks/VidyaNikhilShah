import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'home',
  styleUrls:['home.component.css'],
  template: `
     <div>
                  <div class="col-sm-4 text-center">
                              <img  [src]="nikhilimgpath" class="roundedBorder rotateImg nxImg"/>
                  </div>
                  <div class="col-sm-4">
                      <md-card class="">
                        <md-card-title class="text-center">Nikhil Weds Vidya</md-card-title>   
                        <md-card-content class="text-center">
                              <p>This is supporting text.</p>
                               <p>Date: 28-April-2017</p>
                        </md-card-content>
                        <md-card-actions class="text-center">
                              <button md-raised-button color="warn">More Information</button>
                        </md-card-actions>
                      </md-card>
                  </div>
                  <div class="col-sm-4 text-center">
                    <img  [src]="vidyaimgpath" class="roundedBorder rotateImg nxImg" />
                  </div> 
              </div>
  `
})
export class HomeComponent { 
nikhilimgpath:string="./public/images/nyks.jpg";
vidyaimgpath:string="./public/images/vd.jpg";
  constructor(){
  }
 
}