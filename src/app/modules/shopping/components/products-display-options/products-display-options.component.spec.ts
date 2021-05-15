import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDisplayOptionsComponent } from './products-display-options.component';

describe('ProductsDisplayOptionsComponent', () => {
  let component: ProductsDisplayOptionsComponent;
  let fixture: ComponentFixture<ProductsDisplayOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDisplayOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDisplayOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
