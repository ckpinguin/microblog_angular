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
    private currentUser: User;

    constructor(
        private loginService: LoginService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.title = this.activatedRoute.snapshot.data['title'];
        this.loginService.getCurrentUser().subscribe(data => {
            console.log('User', data.name, 'has logged in!');
            this.currentUser = data;
            this.showForm = false;
        });

    }
}
