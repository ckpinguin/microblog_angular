import {Component, OnInit, Inject} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { BlogEntry } from './model/model-interfaces';

@Component({
    selector: 'ck-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
    title = 'CK\'s microblog!';


    constructor(private activatedRoute: ActivatedRoute, private titleService: Title) { }

    ngOnInit() {
        const title = this.activatedRoute.snapshot.data['title'];
        if (title) {
            this.titleService.setTitle(title);
        }
    }


}
