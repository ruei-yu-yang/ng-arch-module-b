import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbC1Component } from './mb-c1.component';

describe('MbC1Component', () => {
  let component: MbC1Component;
  let fixture: ComponentFixture<MbC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbC1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
