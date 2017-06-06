import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { LoginService } from '../login.service';

import { User } from '../../user/model-interfaces';

@Component({
    selector: 'ck-login-page',
    templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {
    private title: string;
    private showForm = true;
    private currentUser: string;

    constructor(
        private loginService: LoginService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.title = this.activatedRoute.snapshot.data['title'];
        if (!this.loginService.isLoggedIn()) {
            console.log('nobody logged in yet');
            this.showForm = true;
            this.loginService.currentUser.subscribe(data => {
                console.log('User', data.name, 'is logged in!');
                if (data.name !== undefined) {
                    this.currentUser = data.name;
                    this.showForm = false;
                }
            });
        } else {
            // A user is already logged in
            this.currentUser = this.loginService.getCurrentUserName();
            this.showForm = false;
        }
    }
}
