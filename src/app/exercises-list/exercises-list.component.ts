import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from '../types/exercise';
import { ExercisesService } from '../exercises.service';
import { ExerciseListElementComponent } from '../exercise-list-element/exercise-list-element.component';
import { FormsModule } from '@angular/forms';
import { SearchExercisePipe } from '../search-exercise.pipe';
import { AddPostComponent } from '../add-post/add-post.component';
import { AboutComponent } from '../about/about.component';
import { LoginComponent } from '../login/login.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { AddExerciseComponent } from '../add-exercise/add-exercise.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-exercises-list',
  standalone: true,
  imports: [CommonModule, ExerciseListElementComponent, FormsModule, SearchExercisePipe, AddPostComponent,
    AboutComponent, LoginComponent, PostsListComponent, AddExerciseComponent, RouterLink],
  providers: [ExercisesService],
  templateUrl: './exercises-list.component.html',
  styleUrl: './exercises-list.component.css'
})
export class ExercisesListComponent implements OnInit {
  exercises: Exercise[] = [];
  searchValue: string = '';
  constructor(private exercisesService: ExercisesService) {}

  ngOnInit(): void {
    this.exercisesService.getAllExercises().subscribe(data => this.exercises = data);
  }
}
