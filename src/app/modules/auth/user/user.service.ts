import { Injectable } from '@angular/core';

import { User } from './model-interfaces';
import { initialUsers } from './initialUsers';

@Injectable()
export class UserService {
    users: Array<User>;

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
        this.users = this.initialState;
        // this.currentUser = {};
    }

    get initialState(): Array<User> {
        return initialUsers;
    }

    getUsers(): Array<User> {
        return this.users;
    }

    setUsers(users: Array<User>) {
        this.users = users;
    }

    getUserByName(name: String): User {
        return this.users.find(e =>
            e.name === name
        );
    }

    saveUser(user: User): void {
        // update or create?
        if (this.users.findIndex(e => e.id === user.id) >= 0) {
            console.log('service found existing user: ', user);
            this.updateUser(user);
        } else {
            console.log('service will save (concat) a new user');
            user.id = UserService.guid();
            this.users = this.users.concat([ user ]);
        }
        console.log('service saved user: ', user);
        console.log('service users now: ', this.users);
    }

    updateUser(updatedUser: User): void {
        this.users = this.users.map(e => {
            if (e.id !== updatedUser.id) {
                return e;
            }
            return {
                ...e,
                ...updatedUser // update the changed or new fields
            };
        });
    }

    deleteUser(id: string): void {
        this.users = this.users.filter(e => e.id !== id);
    }

}
