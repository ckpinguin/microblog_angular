import { Component, OnInit, Input } from '@angular/core';

import { BlogEntry } from '../model/model-interfaces';

@Component({
  selector: 'ck-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.styl']
})
export class BlogItemComponent implements OnInit {
  @Input() item: BlogEntry;

  constructor() { }

  ngOnInit() {
  }

}
