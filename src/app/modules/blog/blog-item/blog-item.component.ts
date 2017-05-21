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
        private route: ActivatedRoute,
        private blogService: BlogService) { }

    ngOnInit() {
        this.routeSubscription = this.route.params
            .subscribe(params => {
                const id = (params['id'] || '');
                this.item = ('undefined' === typeof this.item)
                     ? this.item = this.blogService.getEntryById(id)
                     : this.item;
            });
    }

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
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
                // outlets: {edit: 'edit'}
        };
        // this.router.navigate([ `/blog/item/${id}/edit` ], navigationExtras);
        this.router.navigateByUrl(`blog/item/${id}/edit`);
    }

    onDelete(id: string) {
        this.blogService.deleteEntry(id);
    }
}
