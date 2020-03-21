import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { CommonModule } from '@angular/common';
import { ProductModule } from 'src/app/components/product/product.module';
import { routing } from './products.routing';


describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [
        CommonModule,
        ProductModule,
        routing
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    console.log('component');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updates basket correctly', () => {
    component.onBasketClick(component.products[1]);
    component.onBasketClick(component.products[2]);
    component.onBasketClick(component.products[1]);
    expect(component.basket.total).toEqual(2.55.toFixed(2));
  });

  it('updates basket incorrectly', () => {
    component.onBasketClick(component.products[1]);
    component.onBasketClick(component.products[2]);
    component.onBasketClick(component.products[1]);
    expect(component.basket.total).not.toEqual(3.55.toFixed(2));
  });
});
