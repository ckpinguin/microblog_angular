import {Component, OnInit, Input, Inject} from '@angular/core';

import { BlogEntry } from '../model-interfaces';
import { BlogService } from '../blog.service';

@Component({
    selector: 'ck-blog-list',
    templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {

    constructor(private blogService: BlogService) {
    }

    get entries(): Array<BlogEntry> {
        return this.blogService.getEntries();
    }

    ngOnInit() {
    }

}
