import {Component, Inject} from '@angular/core';

import { BlogEntry } from './model/model-interfaces';

@Component({
    selector: 'ck-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent {
    title = 'CK\'s microblog!';


    constructor() {
    }


}
