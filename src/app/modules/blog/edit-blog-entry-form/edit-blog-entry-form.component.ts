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
    styleUrls: [ './edit-blog-entry-form.component.styl' ]
})
export class EditBlogEntryFormComponent implements OnInit {
    @ViewChild(NgForm) form: NgForm; // Needed for unit tests

    private showForm = true;
    private currentEntry: BlogEntry;

    constructor(private blogService: BlogService) {
    }

    ngOnInit() {
        this.blogService.getCurrentEntry().subscribe(data => {
            console.log('received callback from subscription! ', data);
            this.currentEntry = data;
            this.showForm = true;
        });
    }

    get entry(): BlogEntry {
        if (this.currentEntry) {
            return this.currentEntry;
        }
        this.showForm = false;
        return {};
    }

    onSubmit(formValue: any) {
        this.blogService.saveEntry(formValue);
        this.form.reset();
        this.showForm = false;
    }

}
