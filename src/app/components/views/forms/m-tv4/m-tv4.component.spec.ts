import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTv4Component } from './m-tv4.component';

describe('MTv4Component', () => {
  let component: MTv4Component;
  let fixture: ComponentFixture<MTv4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTv4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTv4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
