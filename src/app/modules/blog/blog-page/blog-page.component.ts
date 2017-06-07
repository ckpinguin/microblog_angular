import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { BlogService } from '../blog.service';
import { BlogEntry } from '../model-interfaces';

@Component({
    selector: 'ck-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: [ './blog-page.component.styl' ]
})
export class BlogPageComponent implements OnInit {
    private title: string;
    private newEntry: BlogEntry;
    private callPath: string;
    private pathNew = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private blogService: BlogService
    ) { }

    ngOnInit() {
        this.title = this.activatedRoute.snapshot.data['title'];
        this.pathNew = false;
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(event => {
                if (event['url'].split('/').pop() === 'new') {
                    this.pathNew = true;
                    this.blogService.createNewEntry();
                } else {
                    this.pathNew = false;
                }
            });
        this.blogService.getLastEntry().subscribe(entry => {
            this.newEntry = entry;
            console.log('last entry: ', this.newEntry);
        });
    }

}
