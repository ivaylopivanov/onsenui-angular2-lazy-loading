import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarComponent } from './bar.component';

let ROUTES: Routes = [
  {
    component: BarComponent,
    path: '',
  },
];

export let barRoutes: ModuleWithProviders = RouterModule.forChild(ROUTES);
