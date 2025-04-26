import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchItComponent } from './match-it.component';

describe('MatchItComponent', () => {
  let component: MatchItComponent;
  let fixture: ComponentFixture<MatchItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchItComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
