import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesMiniComponent } from './services-mini.component';

describe('ServicesMiniComponent', () => {
  let component: ServicesMiniComponent;
  let fixture: ComponentFixture<ServicesMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesMiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
