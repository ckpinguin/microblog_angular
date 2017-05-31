import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogService } from '../blog.service';

@Component({
    selector: 'ck-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: [ './blog-page.component.styl' ]
})
export class BlogPageComponent implements OnInit {
    private title;
    private newEntry = {};

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private blogService: BlogService
    ) { }

    ngOnInit() {
        this.title = this.activatedRoute.snapshot.data['title'];
    }

    createNewEntry() {
        console.log('creating new entry');
        this.newEntry = { editing: true };
    }

}
