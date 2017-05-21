import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { User } from '../user/model-interfaces';
import { UserService } from '../user/user.service';

import md5 from 'md5';

@Injectable()
export class LoginService {
    // currentUser: User;
    private currentUser: Subject<User> = new Subject<User>();

    constructor(private userService: UserService) {}

    login(name: string, password: string): boolean {
        const user = this.userService.getUserByName(name);
        if (user) {
            if (md5(password) === user.password) {
                console.log('password correct, logging in');
                this.setCurrentUser(user.id);
                return true;
            }
            console.log('password wrong!');
        }
        return false;
    }

    getCurrentUser(): Observable<User> {
        return this.currentUser;
    }

    setCurrentUser(id: string): void {
        const newCurrentUser = Object.assign({}, this.userService.users.find(e => e.id === id));
        this.currentUser.next(newCurrentUser);
        console.log('current user is now: ', newCurrentUser);
    }

    isLoggedIn(): boolean {
        console.log('currentUser: ', this.currentUser);
        return (this.currentUser !== undefined);
    }

}
