import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { BlogEntry } from './model-interfaces';

import { initialEntries } from './initialEntries';

@Injectable()
export class BlogService {
    private _entries: BehaviorSubject<Array<BlogEntry>> = new BehaviorSubject<Array<BlogEntry>>(initialEntries);
    public readonly entries: Observable<Array<BlogEntry>> = this._entries.asObservable();

    private _newEntry: BehaviorSubject<BlogEntry> = new BehaviorSubject<BlogEntry>(
        {
            id: BlogService.guid(),
            editing: false
        });
    public readonly newEntry: Observable<BlogEntry> = this._newEntry.asObservable();

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
        this.entries.subscribe(data => {
            console.log('entries changed: ', data);
        });
        this.newEntry.subscribe(data => {
            console.log('new entry changed: ', data);
        });
    }

    setEntries(entries: Array<BlogEntry>): void {
        this._entries.next(entries);
    }

    getEntryById(id: string): BlogEntry {
        if (this._newEntry.getValue().id === id) {
            // console.log('getEntryById found newEntry: ', this._newEntry.getValue());
            return this._newEntry.getValue();
        }
        return this._entries.getValue().find(e => e.id === id);
    }

    saveEntry(entry: BlogEntry): void {
        // update or create?
        if (this._entries.getValue().findIndex(e => e.id === entry.id) >= 0) {
            console.log('service found existing entry: ', entry);
            this.updateEntry(entry);
            this.finishEditingEntry(entry.id);
        } else {
            console.log('service will save (concat) a new entry');
            // entry.id = BlogService.guid(); // not our responsibility!
            this.setEntries(this._entries.getValue().concat([ entry ]));
            this.finishEditingEntry(entry.id);
        }
        console.log('service saved entry: ', entry);
    }

    startEditingEntry(id: string): void {
        const entry: BlogEntry = this.getEntryById(id);
        this.updateEntry({ ...entry, editing: true });
        // TODO: maybe set all other entries to editing: false?
    }

    finishEditingEntry(id: string): void {
        const entry: BlogEntry = this.getEntryById(id);
        this.updateEntry({ ...entry, editing: false });
    }

    updateEntry(updatedEntry: BlogEntry): void {
        // first check, if we update the `newEntry`:
        if (updatedEntry.id === this._newEntry.getValue().id) {
            this._newEntry.next(updatedEntry);
            return;
        }
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
