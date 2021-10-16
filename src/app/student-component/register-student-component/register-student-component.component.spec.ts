import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStudentComponentComponent } from './register-student-component.component';

describe('RegisterStudentComponentComponent', () => {
  let component: RegisterStudentComponentComponent;
  let fixture: ComponentFixture<RegisterStudentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStudentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStudentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
