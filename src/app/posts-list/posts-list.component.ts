import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../types/post';
import { PostListElementComponent } from '../post-list-element/post-list-element.component';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule, PostListElementComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];

  ngOnInit(): void {
    this.posts[0] = new Post(1, "Innowacyjny plan treningowy", "Krótkie wprowadzenie", "Plan treningowy", "do uzupełnienia", "Pudzian", new Date("2023-11-20"));
    this.posts[1] = new Post(2, "Innowacyjny plan treningowy", "Krótkie wprowadzenie", "Plan treningowy", "do uzupełnienia", "Pudzian", new Date("2023-11-20"));
    this.posts[2] = new Post(3, "Innowacyjny plan treningowy", "Krótkie wprowadzenie", "Plan treningowy", "do uzupełnienia", "Pudzian", new Date("2023-11-20"));
    this.posts[3] = new Post(4, "Innowacyjny plan treningowy", "Krótkie wprowadzenie", "Plan treningowy", "do uzupełnienia", "Pudzian", new Date("2023-11-20"));
    this.posts[4] = new Post(5, "Innowacyjny plan treningowy", "Krótkie wprowadzenie", "Plan treningowy", "do uzupełnienia", "Pudzian", new Date("2023-11-20"));
  }
}
