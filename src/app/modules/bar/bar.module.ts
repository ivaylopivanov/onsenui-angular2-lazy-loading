import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BarComponent } from './bar.component';
import { barRoutes } from './bar.routes';

@NgModule({
  declarations: [
    BarComponent
  ],
  imports: [
    CommonModule,
    barRoutes,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class BarModule { }
