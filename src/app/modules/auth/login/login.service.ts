import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable';

import { User } from '../user/model-interfaces';
import { UserService } from '../user/user.service';

import md5 from 'md5';

@Injectable()
export class LoginService {
    private _currentUser: BehaviorSubject<User> = new BehaviorSubject<User>({});
    public readonly currentUser: Observable<User> = this._currentUser.asObservable();

    private loggedIn = false;

    constructor(private userService: UserService) { }

    login(name: string, password: string): boolean {
        const user = this.userService.getUserByName(name);
        if (user) {
            if (md5(password) === user.password) {
                console.log('password correct, logging in');
                this.setCurrentUser(user.id);
                this.loggedIn = true;
                return true;
            }
            console.log('password wrong!');
        }
        return false;
    }

    logout(): void {
        this.loggedIn = false;
    }

    setCurrentUser(id: string): void {
        const newCurrentUser = this.userService.getUserById(id);
        this._currentUser.next(newCurrentUser);
    }

    getCurrentUser(): string {
        return this._currentUser.getValue().id;
    }

    // TODO: rewrite this to work with subscribing
    isLoggedIn(): boolean {
        return this.loggedIn;
    }

}
