import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';
//import {MaterialModule} from '../materialModule/material.module';
//import {ModalOpenDirective} from '../materialdesign/myDirective';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [CommonModule],
  providers: [SharedService]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      // providers: [SharedService]
    };
  }
}