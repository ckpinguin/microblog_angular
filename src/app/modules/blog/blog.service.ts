import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { BlogEntry } from './model-interfaces';

import { initialEntries } from './initialEntries';

@Injectable()
export class BlogService {
    private entries: BehaviorSubject<Array<BlogEntry>> = new BehaviorSubject<Array<BlogEntry>>(initialEntries);
    private currentEntry: Subject<BlogEntry> = new Subject<BlogEntry>();

    static guid = () => {
        const s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

    constructor() {  }

    getEntries(): BehaviorSubject<Array<BlogEntry>> {
        return this.entries;
    }

    setEntries(entries: Array<BlogEntry>): void {
        this.entries.next(entries);
    }

    getCurrentEntry(): Subject<BlogEntry> {
        return this.currentEntry;
    }

    setCurrentEntry(id: string): void {
        const newCurrent = Object.assign({}, this.entries.getValue().find(e => e.id === id));
        this.currentEntry.next(newCurrent);
    }

    saveEntry(entry: BlogEntry): void {
        // update or create?
        if (this.entries.getValue().findIndex(e => e.id === entry.id) >= 0) {
            console.log('service found existing entry: ', entry);
            this.updateEntry(entry);
        } else {
            console.log('service will save (concat) a new entry');
            entry.id = BlogService.guid();
            this.setEntries(this.entries.getValue().concat([ entry ]));
        }
        console.log('service saved entry: ', entry);
        console.log('service blog entries now: ', this.entries);
    }

    updateEntry(updatedEntry: BlogEntry): void {
        this.setEntries(this.entries.getValue().map(e => {
            if (e.id !== updatedEntry.id) {
                return e;
            }
            return {
                ...e,
                ...updatedEntry // update the changed or new fields
            };
        })
        );
    }

    deleteEntry(id: string): void {
        this.setEntries(this.entries.getValue().filter(e => e.id !== id));
    }

}
