import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceListComponent } from './product-price-list.component';

describe('ProductPriceListComponent', () => {
  let component: ProductPriceListComponent;
  let fixture: ComponentFixture<ProductPriceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPriceListComponent]
    });
    fixture = TestBed.createComponent(ProductPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
