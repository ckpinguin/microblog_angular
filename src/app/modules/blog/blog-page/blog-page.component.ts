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
        this.activatedRoute.params
            .subscribe(params => {
            const id = (params['id'] || '');
            console.log('received router param id: ', id);
            // this.task = this.taskService.getTask(id);
            });
        this.title = this.activatedRoute.snapshot.data['title'];
        // this.newEntry = this.blogService.newEntry;
        this.blogService.newEntry.subscribe(data => {
            this.newEntry = data;
        });
    }

    createNewEntry() {
        this.router.navigate([ './new', { outlets: {primary: 'new' }} ]);
        this.blogService.startEditingEntry(this.newEntry.id);
    }

}
