import { Component } from '@angular/core';

import { BlogListComponent } from './blog-list/blog-list.component';

@Component({
  selector: 'ck-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
