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
        private activatedRoute: ActivatedRoute,
        private navigationService: NavigationService
    ) { }

    ngOnInit() {
        this.title = this.activatedRoute.snapshot.data['title'];
        if (this.loginService.currentUser) {
            this.showForm = false;
        }
    }

    onLogin(formValue: any) {
        const queryParams = this.activatedRoute.snapshot.queryParams;
        const result = this.loginService.login(formValue.name, formValue.password);
        if (result) {
            this.navigationService.navigateHome(queryParams);
        }
    }

    onCancel(cancel: boolean) {
        const queryParams = this.activatedRoute.snapshot.queryParams;
        this.navigationService.navigateHome(queryParams);
    }

}
