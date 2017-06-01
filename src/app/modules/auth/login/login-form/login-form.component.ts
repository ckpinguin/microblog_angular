import { Component, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from '../login.service';

import { NavigationService } from '../../../shared/navigation.service';

@Component({
    selector: 'ck-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: [ './login-form.component.styl' ],
})
export class LoginFormComponent {
    @ViewChild(NgForm) form: NgForm; // Needed for unit tests
    constructor(
        private navigationService: NavigationService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private loginService: LoginService
        ) { }

    onSubmit(formValue: any) {
        const queryParams = this.activatedRoute.snapshot.queryParams;
        const result = this.loginService.login(formValue.name, formValue.password);
        if (result) {
            this.navigationService.navigateHome(queryParams);
        }
        this.form.reset();
    }

    onCancel(cancel: boolean) {
        const queryParams = this.activatedRoute.snapshot.queryParams;
        this.form.reset();
        this.navigationService.navigateBack(queryParams);
        // this.router.navigate(['..']); // Bug: Goes back to /
        // this.navigationService.navigateHome(queryParams);
    }

}

