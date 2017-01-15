import { NgModule } from '@angular/core';
import { CustomNavigation } from './custom-navigation';

@NgModule({
  declarations: [
    CustomNavigation,
  ],
  exports: [
    CustomNavigation,
  ],
})
export class CustomNavigationModule { }
