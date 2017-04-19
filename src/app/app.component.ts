import { Component } from '@angular/core';

import { BlogEntry } from './model/model-interfaces';

@Component({
    selector: 'ck-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent {
    title = 'CK\'s microblog!';
    blogEntries: Array<BlogEntry>;
    newEntry: BlogEntry;

    constructor() {
        this.blogEntries = this.getInitialState();
        this.newEntry = {};
    }

    getInitialState(): Array<BlogEntry> {
        return [
            {
                id: 0,
                title: 'Testentry',
                text: 'Just a little\n test',
                image: 'http://random.cat/i/8IcD0.jpg',
                date: null,
                tags: []
            },
            {
                id: 1,
                title: 'another one',
                text: 'Cats always work :-)',
                image: 'http://random.cat/i/061_-_qxHYGTX.gif',
                date: null,
                tags: []
            }
        ];
    }

    getNextId(): number {
        const currentId = this.blogEntries[this.blogEntries.length - 1].id;
        return currentId + 1;
    }

    saveBlogEntry(entry): void {
        entry.id = this.getNextId();
        this.blogEntries.push(entry);
        console.log('saved entry: ', entry);
        this.newEntry = {};
    }

}
