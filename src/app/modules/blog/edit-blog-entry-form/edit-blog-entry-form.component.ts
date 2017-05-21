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
import { LoginService } from '../../auth/login/login.service';

@Component({
    selector: 'ck-edit-blog-entry-form',
    templateUrl: './edit-blog-entry-form.component.html',
    styleUrls: [ './edit-blog-entry-form.component.styl' ]
})
export class EditBlogEntryFormComponent implements OnInit {
    @ViewChild(NgForm) form: NgForm; // Needed for unit tests

    private showForm = false;
    private currentEntry: BlogEntry;
    private currentUserId: string;
    private authorName: string;

    constructor(private blogService: BlogService, private loginService: LoginService) {
    }

    ngOnInit() {
        this.blogService.currentEntry.subscribe(data => {
            console.log('received currentEntry from subscription! ', data);
            this.currentEntry = data;
            this.showForm = true;
        });
        this.loginService.currentUser.subscribe(data => {
            console.log('received currentUser from subscription! ', data);
            this.currentUserId = data.id;
            this.authorName = data.name;
        });
    }

    get entry(): BlogEntry {
        if (this.currentEntry) {
            return { ...this.currentEntry,
                user: this.currentUserId,
                author: this.authorName
            };
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
