import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../types/post';
import { PostListElementComponent } from '../post-list-element/post-list-element.component';
import { PostsService } from '../posts.service';
import { SearchPostPipe } from '../search-post.pipe';
import { FormsModule } from '@angular/forms';
import { SortByDatePipe } from '../sort-by-date.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule, PostListElementComponent, SearchPostPipe, FormsModule, SortByDatePipe, RouterLink],
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
