import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExerciseListElementComponent } from './exercise-list-element/exercise-list-element.component';
import { ExercisesListComponent } from './exercises-list/exercises-list.component';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PostsListComponent, AddPostComponent, RouterLink, AboutComponent, LoginComponent, RegisterComponent, ExerciseListElementComponent, ExercisesListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gym-Blog';
  constructor(private userService: UsersService,  private router: Router) { }

  onLogoutClick() {
    this.userService.userLogout();
    this.router.navigate(['/login']);

  }

  get isLoggedIn(): boolean {
    return this.userService.isAuthenticated();
  }

  get isAdministrator(): boolean {
    console.log(this.userService.isAdministrator());
    return this.userService.isAdministrator();
  }

}

