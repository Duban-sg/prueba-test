import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersComponentComponent } from './teachers-component.component';

describe('TeachersComponentComponent', () => {
  let component: TeachersComponentComponent;
  let fixture: ComponentFixture<TeachersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
