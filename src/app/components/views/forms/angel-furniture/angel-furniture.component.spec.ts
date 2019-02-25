import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngelFurnitureComponent } from './angel-furniture.component';

describe('AngelFurnitureComponent', () => {
  let component: AngelFurnitureComponent;
  let fixture: ComponentFixture<AngelFurnitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngelFurnitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngelFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
