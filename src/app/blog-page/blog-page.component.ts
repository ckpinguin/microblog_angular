import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ck-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: ['./blog-page.component.styl']
})
export class BlogPageComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute, private titleService: Title) { }

    ngOnInit() {
        const title = this.activatedRoute.snapshot.data['title'];
        if (title) {
            this.titleService.setTitle(title);
        }
    }

}
