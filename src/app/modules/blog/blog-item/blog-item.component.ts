import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { BlogEntry } from '../model-interfaces';
import { BlogService } from '../blog.service';

@Component({
    selector: 'ck-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: [ './blog-item.component.styl' ]
})
export class BlogItemComponent implements OnInit, OnDestroy {
    @Input() item: BlogEntry;
    private routeSubscription: Subscription;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private blogService: BlogService) { }

    ngOnInit() {
        this.routeSubscription = this.activatedRoute.params
            .subscribe(params => {
                const id = (params['id'] || '');
                console.log('received route param id: ', id);
                this.item = ('undefined' === typeof this.item) // if no item was inputted
                     ? this.item = this.blogService.getEntry(id) // what is in the db
                     : this.item; // what we got from input
            });
    }

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
    }

    get imageWithPath() {
        return 'assets/images/' + this.item.image;
    }

    onEdit(id: string) {
        // console.log('trying to navigate to: ', `/edit/${id}`);
        // this.router.navigate([ '/blog',
        //     { outlets: { 'blogeditoutlet':  [ 'blog', 'edit', id ] } } ]
        // );
        // this.router.navigateByUrl(`/blog/edit/(blogeditoutlet:edit/${id})`);
        // this.router.navigateByUrl(`blog/edit/${id}`);
        const navigationExtras: any = {
            queryParams: { id }
        };
        // this.blogService.startEditingEntry(id);
        this.router.navigate([ './edit', id ]);
        // this.router.navigateByUrl(`blog/item/${id}/edit`);
    }

    onDelete(id: string) {
        this.blogService.deleteEntry(id);
    }
}
