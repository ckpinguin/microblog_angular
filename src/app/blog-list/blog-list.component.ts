import { Component, OnInit, Input } from '@angular/core';

import { BlogEntry } from '../model/model-interfaces';

@Component({
  selector: 'ck-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.styl']
})
export class BlogListComponent implements OnInit {
  @Input() entries: Array<BlogEntry>;

  constructor() { }

  ngOnInit() {
  }

}
