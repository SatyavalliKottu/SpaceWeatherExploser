import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameofthePlanetComponent } from './nameofthe-planet.component';

describe('NameofthePlanetComponent', () => {
  let component: NameofthePlanetComponent;
  let fixture: ComponentFixture<NameofthePlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameofthePlanetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameofthePlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
