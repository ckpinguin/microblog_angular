import { Component, OnInit, Input } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,
     RouterStateSnapshot, Router } from '@angular/router';

import { BlogEntry } from '../model-interfaces';
import { BlogService } from '../blog.service';

@Component({
    selector: 'ck-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: [ './blog-item.component.styl' ]
})
export class BlogItemComponent implements OnInit {
    @Input() item: BlogEntry;
    constructor(
        // private loginService: LoginService,
        private router: Router,
        private blogService: BlogService) { }

    ngOnInit() {
    }

    onEdit(id: string) {
        this.blogService.setCurrentEntry(id);
        console.log('trying to navigate to: ', `/blog/edit/${id}`);
        // this.router.navigate([ {
        //     outlets: { 'blog-page': `/blog/edit/${id}` }} ]
        // );
        this.router.navigateByUrl(`/blog/edit/${id}`);
    }

    onDelete(id: string) {
        this.blogService.deleteEntry(id);
    }
}
