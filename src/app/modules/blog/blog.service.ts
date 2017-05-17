import { Injectable } from '@angular/core';

import { BlogEntry } from './model-interfaces';

import { initialBlogEntries } from './initialBlogEntries';

@Injectable()
export class BlogService {
    blogEntries: Array<BlogEntry>;
    currentEntry: BlogEntry;

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
        this.currentEntry = {};
     }

    get initialState(): Array<BlogEntry> {
        return initialBlogEntries;
    }

    getBlogEntries(): Array<BlogEntry> {
        // console.log('service returning entries: ', this.blogEntries);
        return this.blogEntries;
    }

    getCurrentEntry(): BlogEntry {
        return this.currentEntry;
    }

    setCurrentEntry(id: string): void {
        this.currentEntry = Object.assign({}, this.blogEntries.find(e => e.id === id));
        console.log('current entry is now: ', this.currentEntry);
    }

    saveEntry(entry: BlogEntry): void {
        // update or create?
        if (this.blogEntries.findIndex(e => e.id === entry.id) >= 0) {
            console.log('service found existing entry: ', entry);
            this.updateEntry(entry);
        } else {
            console.log('service will save (concat) a new entry');
            entry.id = BlogService.guid();
            this.blogEntries = this.blogEntries.concat([entry]);
        }
        console.log('service saved entry: ', entry);
        console.log('service blog entries now: ', this.blogEntries);
    }

    updateEntry(updatedEntry: BlogEntry): void {
        this.blogEntries = this.blogEntries.map(e => {
            if (e.id !== updatedEntry.id) {
                return e;
            }
            return {
                ...e,
                ...updatedEntry // update the changed or new fields
            };
        });
    }

    deleteBlogEntry(id: string): void {
        this.blogEntries = this.blogEntries.filter(e => e.id !== id);
    }

}
