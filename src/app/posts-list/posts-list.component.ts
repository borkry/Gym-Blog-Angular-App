import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../types/post';
import { PostListElementComponent } from '../post-list-element/post-list-element.component';
import { PostsService } from '../posts.service';
import { AddPostComponent } from '../add-post/add-post.component';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule, PostListElementComponent],
  providers: [PostsService],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postsService : PostsService) {}

  ngOnInit(): void {
     this.posts = this.postsService.getPosts();
  }

}
