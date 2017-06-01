import { Routes, RouterModule } from '@angular/router';

import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { EditBlogEntryFormComponent } from './edit-blog-entry-form/edit-blog-entry-form.component';
import { LoginGuard } from '../auth/login/login.guard';

export const blogRoutes: Routes = [ {
    path: '', component: BlogPageComponent, data: { title: 'Blog' },
    children: [
        { path: '', component: BlogListComponent, outlet: 'list-outlet' }, // here, aux-outlet is working
        { path: 'items', component: BlogListComponent, outlet: 'list-outlet' }, // here, aux-outlet is NOT working (see bugs in github)
        {
            path: ':id', component: BlogItemComponent, // pathMatch: 'full',
        // outlet: 'list-outlet', // not working, bug: https://github.com/angular/angular/issues/9957
            children: [
                { path: '', component: EditBlogEntryFormComponent, outlet: 'edit-outlet' },
                { path: 'new', component: EditBlogEntryFormComponent,
                    canActivate: [ LoginGuard ], data: { title: 'NEW New entry' } },
                { path: 'edit', component: EditBlogEntryFormComponent,
                    // canActivate: [ LoginGuard ],
                    data: { title: 'NEW Edit entry' },
                    // outlet: 'edit-outlet'
                },
            ]
        },
        { path: 'new/:id', component: EditBlogEntryFormComponent,
            canActivate: [ LoginGuard ], data: { title: 'New entry' } },
        { path: 'edit/:id', component: EditBlogEntryFormComponent,
            canActivate: [ LoginGuard ], data: { title: 'Edit entry' } },
        {
            path: 'item/:id', // component: BlogItemComponent,
            children: [
                { path: 'edit', component: EditBlogEntryFormComponent,
                    data: { title: 'TEST Edit entry' } }
            ]
        }
    ]
} ];

export const blogRoutingComponents = [
    BlogPageComponent, EditBlogEntryFormComponent
];
export const blogRoutingProviders = [ LoginGuard ];
export const blogRouting = RouterModule.forChild(blogRoutes);
