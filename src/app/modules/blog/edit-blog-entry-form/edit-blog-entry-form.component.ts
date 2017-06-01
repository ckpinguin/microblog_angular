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
    @Input() inputEntry: BlogEntry;

    private _entry: BlogEntry;
    private newEntry: BlogEntry;
    private show = true;
    private currentUserId: string;
    private authorName: string;

    constructor(
        private blogService: BlogService,
        private loginService: LoginService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        ) { }

    ngOnInit() {
        console.log('form called with entry: ', this.inputEntry);
        this.entry = Object.assign({}, this.inputEntry);
        this.loginService.currentUser.subscribe(data => {
            console.log('received currentUser from subscription! ', data);
            this.currentUserId = data.id;
            this.authorName = data.name;
        });

        this.activatedRoute.params
            .subscribe(params => {
                const id = (params['id'] || '');
                console.log('received route param id: ', id);
                this.entry = this.blogService.getEntryById(id);
            });

        // This is simpler than a subscription (one-timer):
        // const id = this.activatedRoute.snapshot.params['id'];
        // this.entry = this.blogService.getEntryById(id);
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
        this.form.reset();
        this.show = false;
        // const relUrl = this.router.url.includes('edit') ? '../..' : '..';
        // this.router.navigate([relUrl, this.entry.id], {relativeTo: this.activatedRoute});
        this.router.navigate([ '..' ]); // Bug: Goes back to /
        this.blogService.finishEditingEntry(this.entry.id);
        return false;
    }

}
