import { Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: 'addPost',
        title: 'Dodawanie',
        component: AddPostComponent,
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
    }
];
