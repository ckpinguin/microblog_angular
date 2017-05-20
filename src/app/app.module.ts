import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as tokens from './app.tokens';

// The app
import { AppComponent } from './app.component';

// Shared module
import { SharedModule } from './modules/shared/shared.module';

// Services
import { UserService } from './modules/user/user.service';
import { LoginService } from './modules/auth/login/login.service';
import { BlogService } from './modules/blog/blog.service';

// Routing
import { appRouting, routingComponents } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        routingComponents
    ],
    imports: [
        BrowserModule,
        appRouting,
        SharedModule.forRoot()
    ],
    providers: [ // Global (i.e. Singleton) services
        LoginService,
        UserService,
        BlogService,
        Title,
        { provide: tokens.AUTH_ENABLED, useValue: true }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
