import { Injectable } from '@angular/core';
import { User } from './types/user';

@Injectable() 
export class UsersService {
    users : User[] = [];

    constructor() {
        this.users[0] = new User(1, "Jan", "Kowalski", "mail@mail.com", "hasło");
        this.users[1] = new User(2, "Jan", "Kowalski", "mail@mail.com", "hasło");
        this.users[2] = new User(3, "Jan", "Kowalski", "mail@mail.com", "hasło");
        this.users[3] = new User(4, "Jan", "Kowalski", "mail@mail.com", "hasło");
        this.users[4] = new User(5, "Jan", "Kowalski", "mail@mail.com", "hasło");
        }

    getUsers() : User[] {
        return this.users;
    }

    getUser(index : number) : User {
        return this.users[index];
    }

    getNumberOfUsers() : number {
        return this.users.length;
    }

    addUser(newUser : User) {
        this.users.push(newUser);
    } 
}