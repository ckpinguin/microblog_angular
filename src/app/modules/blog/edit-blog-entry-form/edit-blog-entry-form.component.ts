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
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/mergeMap';

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

    private callPath: string;
    private _entry: BlogEntry;
    private show = true;
    private subscription: Subscription;

    constructor(
        private blogService: BlogService,
        private loginService: LoginService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private snackBar: MdSnackBar
        ) { }

    ngOnInit() {
        console.log('form called with input parameter entry: ', this.inputEntry);
        this.entry = Object.assign({}, this.inputEntry);

        this.subscription = this.activatedRoute.params
            .map(params => params['id'])
            .filter(id => id !== undefined)
            .mergeMap(id => this.blogService.getEntry(id))
            .subscribe(entry => {
                this.entry = entry;
                console.log('setting entry: ', this.entry);
                if (!this.isEntryUser() && !(this.callPath === 'new')) {
                    this.snackBar.open('You can only edit your own entries', 'OK', { duration: 2000 });
                    this.onCancel();
                }
            });
        this.callPath = this.activatedRoute.snapshot.url[0].path;
    }

    isEntryUser() {
        if (typeof this._entry.user !== 'undefined') {
            return this._entry.user === this.loginService.getCurrentUser();
        }
        return false;
    }

    get entry(): BlogEntry {
        return {
            ...this._entry,
            author: (this._entry.author ? this._entry.author : this.loginService.getCurrentUserName())
        };
    }

    set entry(entry: BlogEntry) {
        this._entry = entry;
    }


    onSubmit(formValue: any) {
        if (!this.form.pristine) {
            this.blogService.saveEntry({
                ...formValue,
                date: new Date().toJSON(),
                user: this.loginService.getCurrentUser(),
            });
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
        return false;
    }

}
