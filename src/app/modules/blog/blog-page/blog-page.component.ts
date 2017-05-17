import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ck-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: ['./blog-page.component.styl']
})
export class BlogPageComponent implements OnInit {
    private title;
    constructor(
        private activatedRoute: ActivatedRoute,
        ) { }

    ngOnInit() {
        this.title = this.activatedRoute.snapshot.data['title'];
    }

}
