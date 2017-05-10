import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
    Inject
} from '@angular/core';
import {NgForm} from '@angular/forms';

import { BlogEntry } from '../model/model-interfaces';
import { BlogService } from '../services/blog.service';

@Component({
    selector: 'ck-edit-blog-entry-form',
    templateUrl: './edit-blog-entry-form.component.html',
    styleUrls: ['./edit-blog-entry-form.component.styl']
})
export class EditBlogEntryFormComponent implements OnInit {
    @ViewChild(NgForm) form: NgForm; // Needed for unit tests
    // entry: BlogEntry;

    showForm = true;

    constructor(private blogService: BlogService) {
        // this.entry = this.blogService.getCurrentEntry();
    }

    ngOnInit() {
    }

    // We use the service instead of emitting @Output, but
    // structure stays the same if we need any security checks here
    emitSaveEntry(blogEntry: String) {
        this.blogService.saveEntry(blogEntry);
    }

    get entry(): BlogEntry {
        if (this.blogService.getCurrentEntry != null)
            this.showForm = true;
        return this.blogService.getCurrentEntry();
    }

    onSubmit(formValue: any) {
        this.showForm = false;
        this.emitSaveEntry(formValue);
        // this.entry = this.blogService.newEntry;
        setTimeout(() => {
                this.form.reset();
                this.showForm = true;
        });
    }

}
