import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogService } from '../blog.service';
import { BlogEntry } from '../model-interfaces';

@Component({
    selector: 'ck-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: [ './blog-page.component.styl' ]
})
export class BlogPageComponent implements OnInit {
    private title: String;
    private newEntry: BlogEntry;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private blogService: BlogService
    ) { }

    ngOnInit() {
        this.title = this.activatedRoute.snapshot.data['title'];
        this.blogService.newEntry.subscribe(data => {
            this.newEntry = data;
        });
    }

}
