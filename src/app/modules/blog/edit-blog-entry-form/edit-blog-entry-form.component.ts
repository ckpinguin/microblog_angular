import {
    Component,
    EventEmitter,
    OnInit,
    ViewChild,
    Inject
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { BlogEntry } from '../model-interfaces';
import { BlogService } from '../blog.service';

@Component({
    selector: 'ck-edit-blog-entry-form',
    templateUrl: './edit-blog-entry-form.component.html',
    styleUrls: ['./edit-blog-entry-form.component.styl']
})
export class EditBlogEntryFormComponent implements OnInit {
    @ViewChild(NgForm) form: NgForm; // Needed for unit tests

    showForm = true;

    constructor(private blogService: BlogService) {
    }

    ngOnInit() {
    }

    get entry(): BlogEntry {
        if (this.blogService.getCurrentEntry != null) {
            this.showForm = true;
        }
        return this.blogService.getCurrentEntry();
    }

    onSubmit(formValue: any) {
        this.showForm = false;
        this.blogService.saveEntry(formValue);
        this.form.reset();
        this.showForm = true;
    }

}
