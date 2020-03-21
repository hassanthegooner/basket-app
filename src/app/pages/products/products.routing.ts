import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
