import { Injectable } from '@angular/core';

import { User } from '../model/model-interfaces';
import { UserService } from '../services/user.service';

@Injectable()
export class LoginService {

    constructor(private userService: UserService) {}

    login(loginData: any): boolean {
        console.log('Logging in with: ', loginData);
        return true; // dummy
    }


}
