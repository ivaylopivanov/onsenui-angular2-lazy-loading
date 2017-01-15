import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { fooRoutes } from './foo.routes';

import { BazComponent } from './pages/baz/baz.component';
import { FooComponent } from './pages/foo/foo.component';

@NgModule({
  declarations: [
    BazComponent,
    FooComponent,
  ],
  entryComponents: [
    BazComponent,
  ],
  imports: [
    CommonModule,
    fooRoutes,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class FooModule { }
