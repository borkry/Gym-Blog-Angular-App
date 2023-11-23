import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseListElementComponent } from './exercise-list-element.component';

describe('ExerciseListElementComponent', () => {
  let component: ExerciseListElementComponent;
  let fixture: ComponentFixture<ExerciseListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseListElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciseListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
