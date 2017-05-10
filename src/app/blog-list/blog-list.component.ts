import {Component, OnInit, Input, Inject} from '@angular/core';

import { BlogEntry } from '../model/model-interfaces';
import { BlogService } from '../services/blog.service';

@Component({
    selector: 'ck-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.styl']
})
export class BlogListComponent implements OnInit {

    constructor(private blogService: BlogService) {
    }

    get entries(): Array<BlogEntry> {
        return this.blogService.getBlogEntries();
    }

    ngOnInit() {
    }

}
