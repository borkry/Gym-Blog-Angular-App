import { Injectable } from '@angular/core';
import { Post } from './types/post';
import { HttpClient } from '@angular/common/http';
import { PostPost } from './add-post/post-post';

@Injectable({
    providedIn: 'root'
}) 
export class PostsService {
    url = 'http://localhost:3000/posts';

    constructor(private http : HttpClient) { }

    getAllPosts() {
        return this.http.get<Post[]>(this.url);
    }

    getPostById(id : number) {
        return this.http.get<Post>(`${this.url}/${id}`)
    }

    createPost(post : PostPost) {
        return this.http.post<Post>(this.url, post);
    }

    deletePost(id : number) {
        return this.http.delete<Post>(`${this.url}/${id}`);
    }
}