import { Injectable } from '@angular/core';

import { User } from '../../user/model-interfaces';
import { UserService } from '../../user/user.service';

import md5 from 'md5';

@Injectable()
export class LoginService {

    constructor(private userService: UserService) {}

    login(name: string, password: string): boolean {
        const user = this.userService.getUserByName(name);
        if (user) {
            if (md5(password) === user.password) {
                console.log('password correct, logging in');
                this.userService.setCurrentUser(user.id);
                return true;
            }
            console.log('password wrong!');
        }
        return false;
    }

    get currentUser(): User {
        console.log('login service getting current user: ', this.userService.getCurrentUser());
        return this.userService.getCurrentUser();
    }

}
