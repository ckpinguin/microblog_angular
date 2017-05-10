import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { EditBlogEntryFormComponent } from './edit-blog-entry-form/edit-blog-entry-form.component';
import { ShowErrorComponent } from './show-error/show-error.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { BlogService } from './services/blog.service';

import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './navbar/navbar.component';
import { BlogItemComponent } from './blog-item/blog-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    EditBlogEntryFormComponent,
    ShowErrorComponent,
    LoginComponent,
    LayoutComponent,
    NavBarComponent,
    BlogItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService, UserService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
