import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherResourceComponent } from './teacher-resource.component';

describe('TeacherResourceComponent', () => {
  let component: TeacherResourceComponent;
  let fixture: ComponentFixture<TeacherResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherResourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
