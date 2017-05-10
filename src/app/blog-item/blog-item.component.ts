import { Component, OnInit, Input } from '@angular/core';

import { BlogEntry } from '../model/model-interfaces';
import { BlogService } from '../services/blog.service';

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

    onEdit(id: number) {
        //this.blogService.saveEntry();
    }

    onDelete(id: any) {
        this.blogService.deleteBlogEntry(id);
    }
}
