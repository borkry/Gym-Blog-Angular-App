import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from '../types/exercise';
import { ExercisesService } from '../exercises.service';
import { ExerciseListElementComponent } from '../exercise-list-element/exercise-list-element.component';
import { FormsModule } from '@angular/forms';
import { SearchExercisePipe } from '../search-exercise.pipe';

@Component({
  selector: 'app-exercises-list',
  standalone: true,
  imports: [CommonModule, ExerciseListElementComponent, FormsModule, SearchExercisePipe],
  providers: [ExercisesService],
  templateUrl: './exercises-list.component.html',
  styleUrl: './exercises-list.component.css'
})
export class ExercisesListComponent implements OnInit {
  exercises: Exercise[] = [];
  searchValue: string = '';
  constructor(private exercisesService: ExercisesService) {}

  ngOnInit(): void {
    this.exercises = this.exercisesService.getExercises();
  }
}
