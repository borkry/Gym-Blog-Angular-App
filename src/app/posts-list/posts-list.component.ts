import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../types/post';
import { PostListElementComponent } from '../post-list-element/post-list-element.component';
import { PostsService } from '../posts.service';
import { SearchPostPipe } from '../search-post.pipe';
import { FormsModule } from '@angular/forms';
import { SortByDatePipe } from '../sort-by-date.pipe';
import { AddPostComponent } from '../add-post/add-post.component';
import { AboutComponent } from '../about/about.component';
import { LoginComponent } from '../login/login.component';
import { ExercisesListComponent } from '../exercises-list/exercises-list.component';
import { AddExerciseComponent } from '../add-exercise/add-exercise.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule, PostListElementComponent, SearchPostPipe, FormsModule, SortByDatePipe, AddPostComponent,
  AboutComponent, LoginComponent, ExercisesListComponent, AddExerciseComponent, RouterLink],
  providers: [PostsService],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  searchValue: string = '';
  constructor(private postsService : PostsService) {}

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe(data => this.posts = data);
  }

}
