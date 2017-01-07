import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }        from '@angular/common';
import {NxModalComponent} from './nxModal.component';

@NgModule({
  imports: [CommonModule],
  declarations:[NxModalComponent],
  exports: [NxModalComponent]
})
export class NxModalModule{}

