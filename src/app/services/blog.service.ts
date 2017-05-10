import { Injectable } from '@angular/core';

import { BlogEntry } from '../model/model-interfaces';

import { initialBlogEntries } from '../model/initialBlogEntries';

@Injectable()
export class BlogService {
    blogEntries: Array<BlogEntry>;
    newBlogEntry: BlogEntry;

    static guid = () => {
        const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

    constructor() {
        this.blogEntries = this.initialState;
     }

    get initialState(): Array<BlogEntry> {
        return initialBlogEntries;
    }

    getBlogEntries(): Array<BlogEntry> {
        console.log('service returning entries: ', this.blogEntries);
        return this.blogEntries;
    }

    get newEntry(): BlogEntry {
        return this.newBlogEntry;
    }

    saveEntry(entry): void {
        // update or create?
        if (this.blogEntries.findIndex(e => e.id === entry.id)) {
            this.blogEntries = [
                ...this.blogEntries,
                entry
            ];
        } else {
            entry.id = BlogService.guid();
            this.blogEntries = this.blogEntries.concat([entry]);
        }
        console.log('service saved entry: ', entry);
    }

    deleteBlogEntry(id): void {
        this.blogEntries = this.blogEntries.filter(e => e.id !== id);
    }

}
