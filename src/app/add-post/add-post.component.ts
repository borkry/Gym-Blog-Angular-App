import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [PostsService],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit{
  newPost : Post;
  @Output() postAdded = new EventEmitter<Post>();
  form4create: FormGroup;
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router
  ) {
    this.newPost = new Post(PostsService.length, '', '', '', '', '', new Date());
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
    ]);

    this.form4create.controls['description'].setValidators([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(40),
    ])

    this.form4create.controls['category'].setValidators([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ])

    this.form4create.controls['content'].setValidators([
      Validators.required,
      Validators.minLength(40),
      Validators.maxLength(400),
    ])

    this.form4create.controls['author'].setValidators([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(50),
    ])
  }
  
  onSubmit() {  
    this.newPost = new Post(
      PostsService.length, 
      this.form4create.value.title, 
      this.form4create.value.description,
      this.form4create.value.category,
      this.form4create.value.content,
      this.form4create.value.author,
      new Date("2023-11-20")
    ); 

    this.postAdded.emit(this.newPost);
    // Zresetowanie formularza po dodaniu postu
    this.newPost = new Post(PostsService.length, '', '', '', '', '', new Date());
  }
}
