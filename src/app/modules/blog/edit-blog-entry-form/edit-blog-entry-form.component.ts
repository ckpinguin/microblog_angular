import {
    Component,
    EventEmitter,
    OnInit,
    ViewChild,
    Input,
    Inject
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import _ from 'lodash';

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
    @Input() inputEntry: BlogEntry; // optional, can only work with routing parameters (see ngOnInit)

    private _entry: BlogEntry;
    private show = true;
    private currentUserId: string;
    private authorName: string;

    constructor(
        private blogService: BlogService,
        private loginService: LoginService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private snackBar: MdSnackBar
        ) { }

    ngOnInit() {
        console.log('form called with entry: ', this.inputEntry);
        this.entry = Object.assign({}, this.inputEntry);
        // const title = this.activatedRoute.snapshot.data['title'];
        const path = this.activatedRoute.snapshot.url[0].path;

        this.loginService.currentUser.subscribe(data => {
            this.currentUserId = data.id;
            this.authorName = data.name;
        });

        this.activatedRoute.params
            .subscribe(params => {
                const id = (params['id'] || '');
                this.entry = this.blogService.getEntryById(id);
                // At this point, user has to be logged in (LoginGuard in route)
                if (!this.isEntryUser() && !(path === 'new')) {
                    this.snackBar.open('You can only edit your own entries', 'OK', { duration: 2000 });
                    this.onCancel();
                }
            });

        // This would be simpler than a subscription (one-timer):
        // const id = this.activatedRoute.snapshot.params['id'];
        // this.entry = this.blogService.getEntryById(id);
    }

    isEntryUser() {
        console.log('authoruser / loggedinuser', this._entry.user, this.currentUserId);
        if (typeof this._entry.user !== 'undefined' && typeof this.currentUserId !== 'undefined') {
            return this._entry.user === this.currentUserId;
        }
        return false;
    }

    get entry(): BlogEntry {
        return {
            ...this._entry,
            user: this.currentUserId,
            author: this.authorName
        };
    }

    set entry(entry: BlogEntry) {
        this._entry = entry;
    }


    onSubmit(formValue: any) {
        if (!this.form.pristine) {
            this.blogService.saveEntry(formValue);
        }
        this.show = false;
        this.router.navigate([ '..' ]); // Bug: Goes back to /
        return false;
    }

    // TODO: find a way to mark the form as pristine when
    // cancelling (still keeping the old values!)
    onCancel() {
        // this.form.reset();
        this.show = false;
        // const relUrl = this.router.url.includes('edit') ? '../..' : '..';
        // this.router.navigate([relUrl, this.entry.id], {relativeTo: this.activatedRoute});
        this.router.navigate([ '..' ]); // Bug: Goes back to /
        this.blogService.finishEditingEntry(this.entry.id);
        return false;
    }

}
