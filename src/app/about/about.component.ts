import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesListComponent } from '../exercises-list/exercises-list.component';
import { AddPostComponent } from '../add-post/add-post.component';
import { LoginComponent } from '../login/login.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { AddExerciseComponent } from '../add-exercise/add-exercise.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ExercisesListComponent,
    AddPostComponent, LoginComponent, PostsListComponent, AddExerciseComponent, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  handleClick(event: Event) {
    event.preventDefault();
  }
}
