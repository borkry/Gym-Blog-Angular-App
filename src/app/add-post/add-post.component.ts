import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
export class AddPostComponent {
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
    })
  }

  get title() {
    return this.form4create.get('title');
  }

  onSubmit() {
    // Przekazanie nowego postu za pomocą EventEmitter
    this.postAdded.emit(this.newPost);
    // Zresetowanie formularza po dodaniu postu
    this.newPost = new Post(PostsService.length, '', '', '', '', '', new Date());
  }
}
