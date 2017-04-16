import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    constructor() { }

    login(loginData): boolean {
        console.log('Logging in with: ', loginData);
        return true; // dummy
    }

  
}
