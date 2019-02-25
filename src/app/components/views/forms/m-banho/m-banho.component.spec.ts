import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MBanhoComponent } from './m-banho.component';

describe('MBanhoComponent', () => {
  let component: MBanhoComponent;
  let fixture: ComponentFixture<MBanhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MBanhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MBanhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
