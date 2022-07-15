import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePagesComponent } from './service-pages.component';

describe('ServicePagesComponent', () => {
  let component: ServicePagesComponent;
  let fixture: ComponentFixture<ServicePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicePagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
