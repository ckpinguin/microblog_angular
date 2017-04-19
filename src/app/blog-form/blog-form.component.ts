import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BlogEntry } from '../model/model-interfaces';

@Component({
    selector: 'ck-blog-form',
    templateUrl: './blog-form.component.html',
    styleUrls: ['./blog-form.component.styl']
})
export class BlogFormComponent implements OnInit {
    @Input('newEntry') entry: BlogEntry;
    @Output() saveEntry = new EventEmitter();
    @ViewChild(NgForm) form: NgForm; // Needed for unit tests

    constructor() {
    }

    ngOnInit() {
    }

    emitSaveEntry(blogEntry: any) {
        this.saveEntry.emit(blogEntry);
    }

    onSubmit(formValue: any) {
        this.emitSaveEntry(formValue);
    }

}
