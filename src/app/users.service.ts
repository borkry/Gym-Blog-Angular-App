import { Injectable } from '@angular/core';
import { User } from './types/user';
import { HttpClient } from '@angular/common/http';
import { PostUser } from './register/post-user';

@Injectable({
    providedIn: 'root'
}) 
export class UsersService {
    user : User | undefined;
    url = 'http://localhost:3000/users';

    constructor(private http : HttpClient) { }

    login() {
        return this.http.get<any>(this.url);
    }

    setUser(user: User) : void {
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
    }

    getUser() : User | null {
        const user = localStorage.getItem('user');
        if(!user) {
            return null;
        }
        return JSON.parse(user);
    }

    createUser(user: PostUser){
        return this.http.post<User>(this.url, user);
    }
}