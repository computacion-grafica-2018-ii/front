import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McocinaComponent } from './mcocina.component';

describe('McocinaComponent', () => {
  let component: McocinaComponent;
  let fixture: ComponentFixture<McocinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McocinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McocinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
