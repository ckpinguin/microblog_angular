import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { LoginService } from '../services/login.service';

@Component({
    selector: 'ck-login',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.styl'],
})
export class LoginFormComponent implements OnInit {
    @ViewChild(NgForm) form: NgForm; // Needed for unit tests

    showForm = true;

    constructor(private loginService: LoginService, private activatedRoute: ActivatedRoute, private titleService: Title) { }

    ngOnInit() {
        const title = this.activatedRoute.snapshot.data['title'];
        if (title) {
            this.titleService.setTitle(title);
        }
    }

    // We use the service instead of emitting @Output, but
    // structure stays the same if we need any security checks here
    emitLogin(blogEntry: String) {
        this.loginService.login(blogEntry);
    }

    onSubmit(formValue: any) {
        this.showForm = false;
        this.emitLogin(formValue);
        // this.entry = this.loginService.newEntry;
        // setTimeout(() => {
        //         this.form.reset();
        //         this.showForm = true;
        // });
    }

}

