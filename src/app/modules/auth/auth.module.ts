import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginFormComponent } from './login/login-form/login-form.component';

import { authRouting, authRoutingComponents } from './auth.routing';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        CommonModule,
        HttpModule,
        authRouting
    ],
    declarations: [
        ...authRoutingComponents,
        LoginFormComponent
    ]
})
export class AuthModule { }
