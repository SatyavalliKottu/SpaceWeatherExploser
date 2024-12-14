import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyWorkoutComponent } from './vocabulary-workout.component';

describe('VocabularyWorkoutComponent', () => {
  let component: VocabularyWorkoutComponent;
  let fixture: ComponentFixture<VocabularyWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocabularyWorkoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VocabularyWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
