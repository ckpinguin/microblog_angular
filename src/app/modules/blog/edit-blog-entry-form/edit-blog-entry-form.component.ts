import {
    Component,
    EventEmitter,
    OnInit,
    OnChanges,
    ViewChild,
    Input,
    Inject
} from '@angular/core';
import { NgForm } from '@angular/forms';

import _ from 'lodash';

import { BlogEntry } from '../model-interfaces';
import { BlogService } from '../blog.service';
import { LoginService } from '../../auth/login/login.service';


@Component({
    selector: 'ck-edit-blog-entry-form',
    templateUrl: './edit-blog-entry-form.component.html',
    styleUrls: [ './edit-blog-entry-form.component.styl' ]
})
export class EditBlogEntryFormComponent implements OnInit, OnChanges {
    @ViewChild(NgForm) form: NgForm; // Needed for unit tests
    @Input() entry: BlogEntry;

    private show: boolean; // used to close the form component individually
    private initialEntry: BlogEntry;
    private currentUserId: string;
    private authorName: string;

    constructor(private blogService: BlogService, private loginService: LoginService) {
    }

    ngOnInit() {
        this.initialEntry = Object.assign({}, this.entry);
        this.loginService.currentUser.subscribe(data => {
            console.log('received currentUser from subscription! ', data);
            this.currentUserId = data.id;
            this.authorName = data.name;
        });
    }

    ngOnChanges() {
        // if (!_.isUndefined(this.entry)) {
        //     this.show = true;
        // }
    }

    getEntry(): BlogEntry {
        return { ...this.entry,
            user: this.currentUserId,
            author: this.authorName
        };
    }

    onSubmit(formValue: any) {
        if (!this.form.pristine) {
            this.blogService.saveEntry(formValue);
            this.show = false;
        }
        this.show = false;
    }

    // TODO: find a way to mark the form as pristine when
    // cancelling (still keeping the old values!)
    onCancel() {
        // this.form.reset();
        this.entry = this.initialEntry;
        this.show = false;
        // this.form.markAsPristine();
        // this.form.resetForm();
    }

}
