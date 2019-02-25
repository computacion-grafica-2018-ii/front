import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuebleTvComponent } from './mueble-tv.component';

describe('MuebleTvComponent', () => {
  let component: MuebleTvComponent;
  let fixture: ComponentFixture<MuebleTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuebleTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuebleTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
