import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
    selector: 'ck-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.styl']
})
export class LoginPageComponent implements OnInit {
    private title;
    private showForm = true;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private loginService: LoginService
    ) { }

    ngOnInit() {
        this.title = this.activatedRoute.snapshot.data['title'];
        if (this.loginService.currentUser) {
            this.showForm = false;
        }
    }

    onLogin(formValue: any) {
        const result = this.loginService.login(formValue.name, formValue.password);
        if (result) {
            this.navigateHome();
        }
    }

    onCancel(cancel: boolean) {
        this.navigateHome();
    }

    navigateHome() {
        const queryParams = this.activatedRoute.snapshot.queryParams;
        const redirect = queryParams['redirect'] || '/';
        this.router.navigateByUrl(decodeURI(redirect));
    }
}
