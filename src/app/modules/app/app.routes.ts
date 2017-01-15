import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    loadChildren: '../foo/foo.module#FooModule',
    path: 'foo',
  },
  {
    loadChildren: '../bar/bar.module#BarModule',
    path: 'bar',
  },
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'foo',
  },
];

export let appRoutes: ModuleWithProviders = RouterModule.forRoot(ROUTES);
