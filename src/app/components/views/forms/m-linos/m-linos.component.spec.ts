import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLinosComponent } from './m-linos.component';

describe('MLinosComponent', () => {
  let component: MLinosComponent;
  let fixture: ComponentFixture<MLinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
