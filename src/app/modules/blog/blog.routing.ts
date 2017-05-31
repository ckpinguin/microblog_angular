import { Routes, RouterModule } from '@angular/router';

import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { EditBlogEntryFormComponent } from './edit-blog-entry-form/edit-blog-entry-form.component';
import { LoginGuard } from '../auth/login/login.guard';

export const blogRoutes: Routes = [ {
    // path '' is the component holding the chief outlet
    path: '', component: BlogPageComponent, data: { title: 'Blog' },
    children: [
        // { path: '', component: BlogListComponent },
        { path: 'new',
            canActivate: [ LoginGuard ],
            component: EditBlogEntryFormComponent,
            // outlet: 'blogitemoutlet'
        },
        { path: 'item/:id',
            component: BlogItemComponent,
            // outlet: 'item-outlet',
            children: [
                { path: '', component: EditBlogEntryFormComponent }
            ]
        }
    ] }
];
export const blogRoutingComponents = [
    BlogPageComponent, EditBlogEntryFormComponent
];
export const blogRoutingProviders = [ LoginGuard ];
export const blogRouting = RouterModule.forChild(blogRoutes);