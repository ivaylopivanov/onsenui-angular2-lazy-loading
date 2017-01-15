import {
  ComponentFactoryResolver,
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {OnsenModule} from 'angular2-onsenui';

import {
  CustomNavigationModule,
} from '../custom-navigation/custom-navigation.module';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    appRoutes,
    OnsenModule,
    CustomNavigationModule,
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
