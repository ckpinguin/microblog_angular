import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import * as tokens from './app.tokens';

// The app
import { AppComponent } from './app.component';

// Shared components
import { ShowErrorComponent } from './components/show-error/show-error.component';
import { NavBarComponent } from './components/navbar/navbar.component';

// Login module
import { LoginPageComponent } from './modules/auth/login/login-page/login-page.component';
import { LoginFormComponent } from './modules/auth/login/login-form/login-form.component';
import { LoginService } from './modules/auth/login/login.service';

// User module
import { UserService } from './modules/users/user.service';

// Blog module
import { BlogPageComponent } from './modules/blog/blog-page/blog-page.component';
import { BlogListComponent } from './modules/blog/blog-list/blog-list.component';
import { EditBlogEntryFormComponent } from './modules/blog/edit-blog-entry-form/edit-blog-entry-form.component';
import { BlogItemComponent } from './modules/blog/blog-item/blog-item.component';
import { BlogService } from './modules/blog/blog.service';

// Routing
import { appRouting, routingComponents } from './modules/routing/app.routing';
import { NavigationService } from './modules/routing/navigation.service';
import { BlogComponent } from './modules/blog/blog-component/blog.component';

@NgModule({
    declarations: [
        AppComponent,
        routingComponents,
        BlogListComponent,
        EditBlogEntryFormComponent,
        ShowErrorComponent,
        LoginFormComponent,
        NavBarComponent,
        BlogItemComponent,
        BlogPageComponent,
        LoginPageComponent,
        BlogComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        appRouting
    ],
    providers: [// Global (i.e. Singleton) services
        LoginService,
        UserService,
        BlogService,
        NavigationService,
        Title,
    { provide: tokens.AUTH_ENABLED, useValue: true }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
