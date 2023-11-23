import { Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home Page',
        component: AppComponent,
    },
    {
        path: 'addPost',
        title: 'Dodawanie',
        component: AddPostComponent,
    },
    {
        path: 'posts',
        title: 'Lista postów',
        component: PostsListComponent,
    }
];
