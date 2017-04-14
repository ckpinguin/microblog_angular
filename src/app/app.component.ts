import { Component } from '@angular/core';

import { BlogEntry } from './model/blog-entry/blog-entry';

@Component({
  selector: 'ck-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CK\'s microblog!';
  blogEntries: Array<BlogEntry> = [];

  saveBlogEntry(newEntry) {
/*      const entry = new BlogEntry();
      entry.title = newEntry.title;
      entry.image = newEntry.image;
      entry.text = newEntry.text;*/
      this.blogEntries.push(newEntry);
  }

}
