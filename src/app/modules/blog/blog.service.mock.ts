import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { BlogEntry } from './model-interfaces';

import { initialEntries } from './initialEntries';


@Injectable()
export class MockBlogService {
    public entries$: Observable<Array<BlogEntry>> = new BehaviorSubject<Array<BlogEntry>>([]);

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
        // this.findEntries(); // first call loads initialEntries (mock data)
    }

    // // This is the public API:
    // public saveEntry(entry: BlogEntry): void {
    //     const actionType = entry.id ? EDIT : ADD;
    //     this.blogStore.dispatch({ type: actionType, data: entry });
    // }

    // public deleteEntry(id: string): void {
    //     this.blogStore.dispatch({ type: REMOVE, data: id });
    // }

    // // TODO: use search params to filter data, at the moment this just return all data
    // public findEntries(): Array<BlogEntry> {
    //     const entries = initialEntries; // load mock data
    //     this.blogStore.dispatch({ type: LOAD, data: entries });
    //     return this.blogStore.entries$.getValue();
    // }

    public getEntry(id: number | string): Observable<BlogEntry> {
        return this.entries$.map(list => list
            .find(entry => entry.id === id)
        );
    }

    public getLastEntry(): Observable<BlogEntry> {
        return this.entries$.map(list => list[list.length - 1]);
    }

    public createNewEntry(): void {
        console.log('creating new empty entry: ');
        // this.saveEntry({});
    }

}
