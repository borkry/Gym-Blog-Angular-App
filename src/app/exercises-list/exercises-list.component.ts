import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from '../types/exercise';
import { ExercisesService } from '../exercises.service';
import { ExerciseListElementComponent } from '../exercise-list-element/exercise-list-element.component';

@Component({
  selector: 'app-exercises-list',
  standalone: true,
  imports: [CommonModule, ExerciseListElementComponent],
  providers: [ExercisesService],
  templateUrl: './exercises-list.component.html',
  styleUrl: './exercises-list.component.css'
})
export class ExercisesListComponent implements OnInit {
  exercises: Exercise[] = [];
  constructor(private exercisesService: ExercisesService) {}

  ngOnInit(): void {
    this.exercises = this.exercisesService.getExercises();
  }
}
