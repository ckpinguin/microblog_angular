import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { userRouting, userRoutingComponents } from './user.routing';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        userRouting
    ],
    declarations: [
        userRoutingComponents
    ]
})
export class UserModule { }
