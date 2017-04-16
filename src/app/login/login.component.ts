import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';

@Component({
    selector: 'ck-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.styl'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {

    constructor(private loginService: LoginService) {
        this.loginService = loginService;
    }
    ngOnInit() {}

}
