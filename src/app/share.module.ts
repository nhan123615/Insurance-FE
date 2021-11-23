import { NgModule } from '@angular/core';
import { DrawerComponent, MenuComponent, ScrollComponent, ScrollTopComponent, StickyComponent, ToggleComponent } from './admin/_metronic/kt/components';
import { PreloaderComponent } from './user/elements/preloader/preloader.component';


@NgModule({
  declarations: [
    PreloaderComponent,


  ],
  imports: [
  ],
  exports: [PreloaderComponent,
  ],
  providers: [
  ],
  bootstrap: [],
})
export class ShareModule { }
