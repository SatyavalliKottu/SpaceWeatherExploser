import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomResourceComponent } from './classroom-resource.component';

describe('ClassroomResourceComponent', () => {
  let component: ClassroomResourceComponent;
  let fixture: ComponentFixture<ClassroomResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassroomResourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassroomResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
