import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../types/post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { dateFormatDirective } from '../date-format.directive';
import { UsersService } from '../users.service';
import { RouterLink } from '@angular/router';

@Component({
selector: 'app-post-details',
standalone: true,
imports: [CommonModule, dateFormatDirective, RouterLink],
templateUrl: './post-details.component.html',
styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

post!: Post;
isAdministrator: boolean = false;

constructor(
  private route: ActivatedRoute, 
  private postsService: PostsService, 
  private router: Router,
  private usersService: UsersService
  ) {}

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.postsService.getPostById(postId).subscribe(post => {
      this.post = post;
    });
    this.isAdministrator = this.usersService.isAdministrator();
  }

  deletePost() {
    if (confirm('Czy na pewno chcesz usunąć ten post?')) {
      const postId = this.post?.id;
      if (postId) {
        this.postsService.deletePost(postId).subscribe(
          () => {
            this.router.navigate(['/posts']);
          },
          (error) => {
            console.error('Wystąpił błąd podczas usuwania posta', error);
          }
        );
      }
    }
  }
}
