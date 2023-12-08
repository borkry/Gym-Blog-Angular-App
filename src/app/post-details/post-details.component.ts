import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../types/post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit{

  post: Post | undefined;

  constructor(private route : ActivatedRoute, private postsService : PostsService, private router : Router) {}

  ngOnInit() : void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.postsService.getPostById(postId).subscribe(post => {
      this.post = post;
    })
  }
}
