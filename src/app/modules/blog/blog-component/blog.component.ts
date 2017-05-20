import { Component } from '@angular/core';

@Component({
    selector: 'ck-blog-component',
    template: '<router-outlet></router-outlet><router-outlet name="blog-page"></router-outlet>'
})
export class BlogComponent {

}
