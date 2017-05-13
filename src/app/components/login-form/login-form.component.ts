import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'ck-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.styl'],
})
export class LoginFormComponent {
    @ViewChild(NgForm) form: NgForm; // Needed for unit tests
    @Output('onSubmit') loginEvent: EventEmitter<any> = new EventEmitter();
    @Output('onCancel') cancelEvent: EventEmitter<boolean> = new EventEmitter();
    constructor(
        private location: Location
        ) { }


    onSubmit(formValue: any) {
        // this.showForm = false;
        this.loginEvent.emit(formValue);
        this.form.reset();
    }

    cancel() {
        this.cancelEvent.emit();
    }

}

