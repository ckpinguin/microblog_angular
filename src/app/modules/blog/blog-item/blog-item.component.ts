import { Component, OnInit, Input } from '@angular/core';

import { BlogEntry } from '../model-interfaces';
import { BlogService } from '../blog.service';

@Component({
    selector: 'ck-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: ['./blog-item.component.styl']
})
export class BlogItemComponent implements OnInit {
    @Input() item: BlogEntry;

    constructor(private blogService: BlogService) { }

    ngOnInit() {
    }

    onEdit(id: string) {
        this.blogService.setCurrentEntry(id);
    }

    onDelete(id: string) {
        this.blogService.deleteEntry(id);
    }
}
