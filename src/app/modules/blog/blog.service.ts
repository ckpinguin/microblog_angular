import { Injectable } from '@angular/core';

import { BlogEntry } from './model-interfaces';

import { initialEntries } from './initialEntries';

@Injectable()
export class BlogService {
    entries: Array<BlogEntry>;
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
        this.entries = this.initialState;
        this.currentEntry = {};
     }

    get initialState(): Array<BlogEntry> {
        return initialEntries;
    }

    getEntries(): Array<BlogEntry> {
        return this.entries;
    }

    getCurrentEntry(): BlogEntry {
        return this.currentEntry;
    }

    setCurrentEntry(id: string): void {
        this.currentEntry = Object.assign({}, this.entries.find(e => e.id === id));
        console.log('current entry is now: ', this.currentEntry);
    }

    saveEntry(entry: BlogEntry): void {
        // update or create?
        if (this.entries.findIndex(e => e.id === entry.id) >= 0) {
            console.log('service found existing entry: ', entry);
            this.updateEntry(entry);
        } else {
            console.log('service will save (concat) a new entry');
            entry.id = BlogService.guid();
            this.entries = this.entries.concat([entry]);
        }
        console.log('service saved entry: ', entry);
        console.log('service blog entries now: ', this.entries);
    }

    updateEntry(updatedEntry: BlogEntry): void {
        this.entries = this.entries.map(e => {
            if (e.id !== updatedEntry.id) {
                return e;
            }
            return {
                ...e,
                ...updatedEntry // update the changed or new fields
            };
        });
    }

    deleteEntry(id: string): void {
        this.entries = this.entries.filter(e => e.id !== id);
    }

}
