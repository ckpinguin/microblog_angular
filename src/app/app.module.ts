import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { EditBlogEntryFormComponent } from './edit-blog-entry-form/edit-blog-entry-form.component';
import { ShowErrorComponent } from './show-error/show-error.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { BlogService } from './services/blog.service';

import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './navbar/navbar.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { appRouting, routingComponents } from './app.routing';
import { BlogPageComponent } from './blog-page/blog-page.component';

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
    BlogPageComponent
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
