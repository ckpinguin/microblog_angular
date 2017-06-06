import { NgModule } from '@angular/core';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { BlogService } from './blog.service';
import { BlogStore } from './blog.store';

import { blogRouting, blogRoutingComponents } from './blog.routing';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        blogRouting
    ],
    declarations: [
        blogRoutingComponents,
        BlogListComponent,
        BlogItemComponent,
    ]
})
export class BlogModule { }
