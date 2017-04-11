import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ck-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.styl']
})
export class BlogListComponent implements OnInit {
  @Input() entries;

  constructor() { }

  ngOnInit() {
  }

}
