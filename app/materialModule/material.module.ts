import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
// import {MdIconModule} from '@angular2-material/icon';
// import {MdMenuModule} from '@angular2-material/menu';
// import {MdIconRegistry} from '@angular2-material/icon';
// import {OverlayModule } from '@angular2-material/core';
//import {MdButtonToggleModule} from '@angular2-material/button-toggle/button-toggle';
//import {MdProgressCircleModule} from '@angular2-material/progress-circle/progress-circle';
//import {MdProgressBarModule} from '@angular2-material/progress-bar/progress-bar';
//import {MdInputModule} from '@angular2-material/input';
//import {MdTabsModule} from '@angular2-material/tabs/tabs';
//import {MdToolbarModule} from '@angular2-material/toolbar'; 
//import {MdTooltipModule} from '@angular2-material/tooltip/tooltip';
//import {MdRippleModule} from '@angular2-material/core/ripple/ripple';
//import {PortalModule} from '@angular2-material/core/portal/portal-directives';
//import {OverlayModule} from '@angular2-material/overlay';
//import {RtlModule} from '@angular2-material/core/rtl/dir';
//import {MdCheckboxModule} from '@angular2-material/checkbox/checkbox';
//import {MdRadioModule} from '@angular2-material/radio/radio';
//import {MdSlideToggleModule} from '@angular2-material/slide-toggle/slide-toggle';
//import {MdSliderModule} from '@angular2-material/slider/slider';
//import {MdSidenavModule} from '@angular2-material/sidenav';
////import {MdListModule} from '@angular2-material/list/list';
//import {MdGridListModule} from '@angular2-material/grid-list/grid-list';
//import {MdCardModule} from '@angular2-material/card';
//import {ModalOpenDirective} from './myDirective';
const MATERIAL_MODULES = [
  MdButtonModule,
  // MdIconModule,
  // MdMenuModule,
  // MdSidenavModule,
  // MdToolbarModule,
  // MdCardModule,
  // MdInputModule
  //MdSliderModule,
  //MdSlideToggleModule
];

@NgModule({
  imports: [
    MdButtonModule.forRoot(),
    // MdIconModule.forRoot(),
    // MdMenuModule.forRoot(),
    // MdSidenavModule.forRoot(),
    // MdToolbarModule.forRoot(),
    // MdIconModule.forRoot(),
    // MdCardModule.forRoot(),
    // MdInputModule.forRoot(),
    //MdSliderModule.forRoot(),
    //MdSlideToggleModule.forRoot(),
    //OverlayModule.forRoot(),
  ],
  declarations: [],
  exports: [MATERIAL_MODULES]
})
export class MaterialRootModule { }
/***************************************************************** */
@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class MaterialModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MaterialRootModule
    }
  }
}
