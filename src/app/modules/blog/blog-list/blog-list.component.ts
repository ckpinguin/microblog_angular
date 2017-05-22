import { Component, OnInit, Input, Inject } from '@angular/core';

import { BlogEntry } from '../model-interfaces';
import { BlogService } from '../blog.service';

@Component({
    selector: 'ck-blog-list',
    templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {

    private entries: Array<BlogEntry>;

    constructor(
        private blogService: BlogService
    ) { }

    ngOnInit() {
        this.blogService.entries.subscribe(data => {
            console.log('received new entries');
            this.entries = data;
        });
    }
}
