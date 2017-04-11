import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { BlogFormComponent } from './blog-form/blog-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogEntryComponent,
    BlogFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
