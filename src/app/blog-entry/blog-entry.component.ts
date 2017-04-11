import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ck-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.styl']
})
export class BlogEntryComponent implements OnInit {
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
