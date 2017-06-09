import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { User } from './model-interfaces';
import { initialUsers } from './initialUsers';

import { LOAD, ADD, EDIT, REMOVE, UserStore } from './user.store';

@Injectable()
export class UserService {
    public users$: Observable<Array<User>>;
    // private _users: BehaviorSubject<Array<User>> = new BehaviorSubject<Array<User>>(initialUsers);
    // public readonly users: Observable<Array<User>> = this._users.asObservable();

    constructor(private userStore: UserStore) {
        this.users$ = userStore.users$; // pass-through as Observable
        this.findUsers(); // first call loads initialUsers (mock data)
    }

    // This is the public API:
    public saveUser(user: User): void {
        const actionType = user.id ? EDIT : ADD;
        this.userStore.dispatch({ type: actionType, data: user });
    }

    public deleteUser(id: string): void {
        this.userStore.dispatch({ type: REMOVE, data: id });
    }

    // TODO: use search params to filter data, at the moment this just return all data
    private findUsers(): Array<User> {
        const users = initialUsers; // load mock data
        this.userStore.dispatch({ type: LOAD, data: users });
        return this.userStore.users$.getValue();
    }

    public getUser(id: number | string): Observable<User> {
        return this.users$.map(list => list
            .find(user => user.id === id)
        );
    }

    public getUserByName(name: string): Observable<User> {
        return this.users$.map(list => list
            .find(user => user.name === name)
        );
    }

    public getLastUser(): Observable<User> {
        return this.users$.map(list => list[list.length - 1]);
    }

    public createNewUser(): void {
        console.log('creating new empty user: ');
        this.saveUser({});
    }

}
