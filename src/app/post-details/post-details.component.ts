import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../types/post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../types/user';

@Component({
selector: 'app-post-details',
standalone: true,
imports: [CommonModule],
templateUrl: './post-details.component.html',
styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

post: Post | undefined;
isAdministrator: boolean = false;

constructor(
  private route: ActivatedRoute, 
  private postsService: PostsService, 
  private router: Router
  ) {}

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.postsService.getPostById(postId).subscribe(post => {
      this.post = post;
    });
    this.isAdministrator = this.IsAdministrator();
  }

  private IsAdministrator(): boolean {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user: User = JSON.parse(userString);
      return user.isAdmin === true;
    }
    return false;
  }

  editPost() {
    // Kod do nawigacji do formularza edycji posta.
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
