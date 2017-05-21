import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { BlogEntry } from './model-interfaces';

import { initialEntries } from './initialEntries';

@Injectable()
export class BlogService {
    private _entries: BehaviorSubject<Array<BlogEntry>> = new BehaviorSubject<Array<BlogEntry>>(initialEntries);
    public readonly entries: Observable<Array<BlogEntry>> = this._entries.asObservable();

    private _currentEntry: BehaviorSubject<BlogEntry> = new BehaviorSubject<BlogEntry>({});
    public readonly currentEntry: Observable<BlogEntry> = this._currentEntry.asObservable();

    static guid = () => {
        const s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

    constructor() { }

    setEntries(entries: Array<BlogEntry>): void {
        this._entries.next(entries);
    }

    getEntryById(id: string): BlogEntry {
        return this._entries.getValue().find(e => e.id === id);
    }

    setCurrentEntry(id: string): void {
        const newCurrent = Object.assign({}, this._entries.getValue().find(e => e.id === id));
        this._currentEntry.next(newCurrent);
    }

    saveEntry(entry: BlogEntry): void {
        // update or create?
        if (this._entries.getValue().findIndex(e => e.id === entry.id) >= 0) {
            console.log('service found existing entry: ', entry);
            this.updateEntry(entry);
        } else {
            console.log('service will save (concat) a new entry');
            entry.id = BlogService.guid();
            this.setEntries(this._entries.getValue().concat([ entry ]));
        }
        console.log('service saved entry: ', entry);
    }

    updateEntry(updatedEntry: BlogEntry): void {
        this.setEntries(this._entries.getValue().map(e => {
            if (e.id !== updatedEntry.id) {
                return e;
            }
            return {
                ...e,
                ...updatedEntry // update the changed or new fields
            };
        }));
    }

    deleteEntry(id: string): void {
        this.setEntries(this._entries.getValue().filter(e => e.id !== id));
    }

}
