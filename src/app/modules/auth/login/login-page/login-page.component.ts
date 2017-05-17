import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { LoginService } from '../login.service';
import { NavigationService } from '../../../routing/navigation.service';

@Component({
    selector: 'ck-login-page',
    templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {
    private title;
    private showForm = true;

    constructor(
        private loginService: LoginService,
        private navigationService: NavigationService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.title = this.activatedRoute.snapshot.data['title'];
        if (this.loginService.currentUser) {
            this.showForm = false;
        }
    }
}
