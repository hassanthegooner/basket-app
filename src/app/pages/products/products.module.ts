import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductModule } from 'src/app/components/product/product.module';
import { routing } from './products.routing';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductModule,
    routing
  ]
})
export class ProductsModule { }
