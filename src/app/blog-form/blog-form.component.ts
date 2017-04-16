import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BlogEntry } from '../model/model-interfaces';

@Component({
    selector: 'ck-blog-form',
    templateUrl: './blog-form.component.html',
    styleUrls: ['./blog-form.component.styl']
})
export class BlogFormComponent implements OnInit {
    @ViewChild(NgForm) form: NgForm; // just to have it for unit tests
    @Output() saveEntry = new EventEmitter();
    entry: BlogEntry;

    constructor() {
        this.entry = {};
    }

    ngOnInit() {
    }

    emitSaveEntry(blogEntry: any) {
        this.saveEntry.emit(blogEntry);
    }

    onSubmit(formValue: any) {
        console.log(formValue);
        this.entry = formValue;
        this.emitSaveEntry(this.entry);
    }

}
