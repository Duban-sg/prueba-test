import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultStudentComponentComponent } from './consult-student-component.component';

describe('ConsultStudentComponentComponent', () => {
  let component: ConsultStudentComponentComponent;
  let fixture: ComponentFixture<ConsultStudentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultStudentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultStudentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
