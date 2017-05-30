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
    private editing = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private blogService: BlogService) { }

    ngOnInit() {
        this.routeSubscription = this.route.params
            .subscribe(params => {
                const id = (params['id'] || '');
                this.item = ('undefined' === typeof this.item) // if no item was inputted
                     ? this.item = this.blogService.getEntryById(id) // what is in the db
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
        this.blogService.setCurrentEntry(id);
        // console.log('trying to navigate to: ', `/edit/${id}`);
        // this.router.navigate([ '/blog',
        //     { outlets: { 'blogeditoutlet':  [ 'blog', 'edit', id ] } } ]
        // );
        // this.router.navigateByUrl(`/blog/edit/(blogeditoutlet:edit/${id})`);
        // this.router.navigateByUrl(`blog/edit/${id}`);
        const navigationExtras: any = {
            queryParams: { id: id },
            outlets: { edit: 'edit' }
        };
        this.editing = true;
        this.blogService.startEditingEntry(id);
        // this.router.navigate([ `/blog/item/${id}/edit` ], navigationExtras);
        // this.router.navigateByUrl(`blog/item/${id}/edit`);
    }

    onDelete(id: string) {
        this.blogService.deleteEntry(id);
    }
}
