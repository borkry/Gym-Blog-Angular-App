import { Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExercisesListComponent } from './exercises-list/exercises-list.component';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { authGuard } from './auth.guard';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'addPost',
        title: 'Dodawanie postu',
        component: AddPostComponent,
        canActivate : [authGuard],
    },
    {
        path: 'posts',
        title: 'Lista postów',
        component: PostsListComponent,
    },
    {
        path: 'about',
        title: 'Kontakt',
        component: AboutComponent,
    },
    {
        path: 'login',
        title: 'Logowanie',
        component: LoginComponent,
    },
    {
        path: 'register',
        title: 'Rejestracja',
        component: RegisterComponent,
    },
    {
        path: 'exercises',
        title: 'Lista ćwiczeń',
        component: ExercisesListComponent,
    },
    {
        path: 'addExercise',
        title: 'Dodawanie ćwiczenia',
        component: AddExerciseComponent,
        canActivate : [authGuard],
    },
    {
        path: 'posts/:id', 
        component: PostDetailsComponent
    },
    {
        path: 'exercises/:id',
        component: ExerciseDetailsComponent
    },
    {
        path: 'home',
        title: 'Strona główna',
        component: HomeComponent
    }
];
