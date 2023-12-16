import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../types/post';
import { PostsService } from '../posts.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-post',
  standalone: true,
  providers: [PostsService],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent implements OnInit{
  form4edit: FormGroup;
  post!: Post;
  
  constructor(
    private postsService: PostsService, private router : Router, private route: ActivatedRoute 
  ) {
    this.form4edit = new FormGroup({
      title : new FormControl(),
      description : new FormControl(),
      category : new FormControl(),
      content : new FormControl(),
      author : new FormControl(),
    });
  }

  get title() {
    return this.form4edit.get('title');
  }

  get description() {
    return this.form4edit.get('description');
  }

  get category() {
    return this.form4edit.get('category');
  }

  get content() {
    return this.form4edit.get('content');
  }

  get author() {
    return this.form4edit.get('author');
  }

  ngOnInit() {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.postsService.getPostById(postId).subscribe(post => {
      this.post = post;
    });
    this.form4edit.controls['title'].setValidators([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(70),
      Validators.pattern("[A-ZĄĆĘŁŃÓŚŹŻ0-9].*"),
    ])

    this.form4edit.controls['description'].setValidators([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(200),
      Validators.pattern("[A-ZĄĆĘŁŃÓŚŹŻ0-9].*"),
    ])

    this.form4edit.controls['category'].setValidators([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern("[A-ZĄĆĘŁŃÓŚŹŻ].*"),
    ])

    this.form4edit.controls['content'].setValidators([
      Validators.required,
      Validators.minLength(40),
      Validators.maxLength(1000),
      Validators.pattern("[A-ZĄĆĘŁŃÓŚŹŻ0-9].*"),
    ])

    this.form4edit.controls['author'].setValidators([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(50),
      Validators.pattern("[A-ZĄĆĘŁŃÓŚŹŻ].*"),
    ])
  }
  
  onSubmit() {  
    if (this.form4edit.valid) {
      this.post.title = this.form4edit.value.title;
      this.post.author = this.form4edit.value.author;
      this.post.description =  this.form4edit.value.description,
      this.post.category = this.form4edit.value.category,
      this.post.content = this.form4edit.value.content,
      this.post.author = this.form4edit.value.author,
      this.postsService.editPost(this.post.id, this.post).subscribe(res =>{
        alert("Pomyślnie edytowano post!");
        this.form4edit.reset();
        this.router.navigate(['posts', this.post.id]);
      }, err=>{
        alert("Edytowanie postu nie powiodło się!");
      })
    this.form4edit.reset();
    }
  }

}
