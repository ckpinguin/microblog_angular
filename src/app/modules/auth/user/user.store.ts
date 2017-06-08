import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from './model-interfaces';

export const LOAD = 'LOAD';
export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const REMOVE = 'REMOVE';

export class UserStore {
    private entries: Array<User>;
    entries$: BehaviorSubject<Array<User>> = new BehaviorSubject<Array<User>>([]);

    static guid = () => {
        const s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

    dispatch(action) {
        this.entries = this.reduce(this.entries, action); // only place where the store is mutated
        this.entries$.next(this.entries); // propagate the new state to all listeners
    }

    reduce(entries: Array<User>, action) {
        console.log('received action: ', action.type, action.data);
        switch (action.type) {
        case LOAD:
            return [ ...action.data ];
        case ADD:
            console.log('new state: ',[
                ...entries,
                { ...action.data,
                    id: UserStore.guid()
                }
            ]);
            return [
                ...entries,
                { ...action.data,
                    id: UserStore.guid()
                }
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