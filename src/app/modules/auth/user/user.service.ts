import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { User } from './model-interfaces';
import { initialUsers } from './initialUsers';

import { LOAD, ADD, EDIT, REMOVE, UserStore } from './user.store';

@Injectable()
export class UserService {
    private _users: BehaviorSubject<Array<User>> = new BehaviorSubject<Array<User>>(initialUsers);
    public readonly users: Observable<Array<User>> = this._users.asObservable();

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

    get initialState(): Array<User> {
        return initialUsers;
    }

    setUsers(users: Array<User>) {
        this._users.next(users);
    }

    getUserByName(name: String): User {
        return this._users.getValue().find(e =>
            e.name === name
        );
    }

    getUserById(id: String): User {
        return this._users.getValue().find(e => e.id === id);
    }

    saveUser(user: User): void {
        // update or create?
        if (this._users.getValue().findIndex(e => e.id === user.id) >= 0) {
            console.log('service found existing user: ', user);
            this.updateUser(user);
        } else {
            console.log('service will save (concat) a new user');
            user.id = UserService.guid();
            this.setUsers(this._users.getValue().concat([ user ]));
        }
        console.log('service saved user: ', user);
        console.log('service users now: ', this.users);
    }

    updateUser(updatedUser: User): void {
        this.setUsers(this._users.getValue().map(e => {
            if (e.id !== updatedUser.id) {
                return e;
            }
            return {
                ...e,
                ...updatedUser // update the changed or new fields
            };
        }));
    }

    deleteUser(id: string): void {
        this.setUsers(this._users.getValue().filter(e => e.id !== id));
    }

}
