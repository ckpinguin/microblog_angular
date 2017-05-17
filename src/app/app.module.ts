import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlogListComponent } from './modules/blog/blog-list/blog-list.component';
import { EditBlogEntryFormComponent } from './modules/blog/edit-blog-entry-form/edit-blog-entry-form.component';
import { ShowErrorComponent } from './components/show-error/show-error.component';
import { LoginFormComponent } from './modules/auth/login/login-form/login-form.component';

import { LoginService } from './modules/auth/login/login.service';
import { UserService } from './modules/users/user.service';
import { BlogService } from './modules/blog/blog.service';

import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { BlogItemComponent } from './modules/blog/blog-item/blog-item.component';
import { appRouting, routingComponents } from './app.routing';
import { BlogPageComponent } from './modules/blog/blog-page/blog-page.component';
import { LoginPageComponent } from './modules/auth/login/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    BlogListComponent,
    EditBlogEntryFormComponent,
    ShowErrorComponent,
    LoginFormComponent,
    LayoutComponent,
    NavBarComponent,
    BlogItemComponent,
    BlogPageComponent,
    LoginPageComponent
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
    Title
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
