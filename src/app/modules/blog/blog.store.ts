import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { BlogEntry } from './model-interfaces';

export const LOAD = 'LOAD';
export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const REMOVE = 'REMOVE';

export class BlogStore {
    private entries: Array<BlogEntry>;
    entries$: BehaviorSubject<Array<BlogEntry>> = new BehaviorSubject<Array<BlogEntry>>([]);

    dispatch(action) {
        this.entries = this.reduce(this.entries, action); // only place where the store is mutated
        this.entries$.next(this.entries); // propagate the new state to all listeners
    }

    reduce(entries: Array<BlogEntry>, action) {
        console.log('received action: ', action.type, action.data);
        switch (action.type) {
        case LOAD:
            return [ ...action.data ];
        case ADD:
            return [
                ...entries,
                action.data
            ];
        case EDIT:
            const editedEntry = action.data;
            return entries.map(entry => {
                if (entry.id !== editedEntry.id) {
                    return entry;
                }
                return editedEntry;
            });
        case REMOVE:
            return entries.filter(entry => {
                return entry.id !== action.data
            });
        default:
            return entries;
        }
    }
}