import { Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'home',
        component: AppComponent,
    },
    {
        path: 'addPost',
        component: AddPostComponent,
    },
];
