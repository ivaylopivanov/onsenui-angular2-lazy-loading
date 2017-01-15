import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooComponent } from './pages/foo/foo.component';

const ROUTES: Routes = [
  {
    component: FooComponent,
    path: '',
  },
];

export let fooRoutes: ModuleWithProviders = RouterModule.forChild(ROUTES);
