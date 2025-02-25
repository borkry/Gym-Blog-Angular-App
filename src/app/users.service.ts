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

    getUserById(id : number) {
        return this.http.get<User>(`${this.url}/${id}`)
    }

    createUser(user: PostUser){
        return this.http.post<User>(this.url, user);
    }

    userLogout() : void {
        this.user = undefined;
        localStorage.removeItem('user');
    }

    isAuthenticated() : boolean {
        if (localStorage.getItem('user')) {
            return true;
        }
        else {
            return false;
        }
    }

    isAdministrator(): boolean {
        const userString = localStorage.getItem('user');
        if (userString) {
          const user: User = JSON.parse(userString);
          return user.isAdmin;
        }
    return false;
    }
}
