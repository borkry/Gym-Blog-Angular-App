import { Injectable } from '@angular/core';
import { Post } from './types/post';
import { AddPostComponent } from './add-post/add-post.component';
import { Component, EventEmitter, Input, LOCALE_ID, OnInit, Output } from '@angular/core';

@Injectable() 
export class PostsService {
    @Output() postAdded = new EventEmitter<Post>();
    posts : Post[] = [];

    constructor() {
        this.posts[0] = new Post(1, "Innowacyjny plan treningowy", "Krótkie wprowadzenie", "Plan treningowy", "do uzupełnienia", "Pudzian", new Date("2023-11-20"));
        this.posts[1] = new Post(2, "Innowacyjny plan treningowy", "Krótkie wprowadzenie", "Plan treningowy", "do uzupełnienia", "Pudzian", new Date("2023-11-20"));
        this.posts[2] = new Post(3, "Innowacyjny plan treningowy", "Krótkie wprowadzenie", "Plan treningowy", "do uzupełnienia", "Pudzian", new Date("2023-11-20"));
        this.posts[3] = new Post(4, "Innowacyjny plan treningowy", "Krótkie wprowadzenie", "Plan treningowy", "do uzupełnienia", "Pudzian", new Date("2023-11-20"));
        this.posts[4] = new Post(5, "Innowacyjny plan treningowy", "Krótkie wprowadzenie", "Plan treningowy", "do uzupełnienia", "Pudzian", new Date("2023-11-20"));
    }

    getPosts() : Post[] {
        return this.posts;
    }

    getPost(index : number) : Post {
        return this.posts[index];
    }

    getNumberOfPosts() : number {
        return this.posts.length;
    }

    addPost(newPost : Post) {
        this.posts.push(newPost);
    } 
}