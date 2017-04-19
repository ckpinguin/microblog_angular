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
                image: 'http://logos.com/media/VerseOfTheDay/768x432/2016-12-27.png',
                date: null,
                tags: []
            }, {
                id: 1,
                title: 'another one',
                text: 'Just another dumb test',
                image: 'http://logos.com/media/VerseOfTheDay/768x432/2016-12-28.png',
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
