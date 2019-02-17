import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFurnitureComponent } from './test-furniture.component';

describe('TestFurnitureComponent', () => {
  let component: TestFurnitureComponent;
  let fixture: ComponentFixture<TestFurnitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFurnitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
