import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Post } from '../types/post';
import { ExercisesListComponent } from '../exercises-list/exercises-list.component';
import { AboutComponent } from '../about/about.component';
import { LoginComponent } from '../login/login.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { AddExerciseComponent } from '../add-exercise/add-exercise.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
    selector: 'app-add-post',
    standalone: true,
    providers: [PostsService],
    templateUrl: './add-post.component.html',
    styleUrl: './add-post.component.css',
    imports: [CommonModule, FormsModule, ReactiveFormsModule, ExercisesListComponent,
      AboutComponent, LoginComponent, PostsListComponent, AddExerciseComponent, RouterLink]
})
export class AddPostComponent implements OnInit{
  @Output() postAdded = new EventEmitter<Post>();
  form4create: FormGroup;
  
  constructor(
    private postsService: PostsService
  ) {
    this.form4create = new FormGroup({
      title : new FormControl(),
      description : new FormControl(),
      category : new FormControl(),
      content : new FormControl(),
      author : new FormControl(),
    });
  }

  get title() {
    return this.form4create.get('title');
  }

  get description() {
    return this.form4create.get('description');
  }

  get category() {
    return this.form4create.get('category');
  }

  get content() {
    return this.form4create.get('content');
  }

  get author() {
    return this.form4create.get('author');
  }

  ngOnInit() {
    this.form4create.controls['title'].setValidators([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
      Validators.pattern("[A-Z0-9].*"),
    ])

    this.form4create.controls['description'].setValidators([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(40),
      Validators.pattern("[A-Z0-9].*"),
    ])

    this.form4create.controls['category'].setValidators([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern("[A-Z].*"),
    ])

    this.form4create.controls['content'].setValidators([
      Validators.required,
      Validators.minLength(40),
      Validators.maxLength(400),
      Validators.pattern("[A-Z0-9].*"),
    ])

    this.form4create.controls['author'].setValidators([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(50),
      Validators.pattern("[A-Z].*"),
    ])
  }
  
  onSubmit() {  
    if (this.form4create.valid) {
      let newPost = new Post(
        this.postsService.getNumberOfPosts() + 1,
        this.form4create.value.title,
        this.form4create.value.description,
        this.form4create.value.category,
        this.form4create.value.content,
        this.form4create.value.author,
        new Date("2023-11-20")
      );
    this.postsService.addPost(newPost);
    this.postAdded.emit(newPost);
    //console.log(this.postsService.getPosts());
    this.form4create.reset();
    }
  }
}
