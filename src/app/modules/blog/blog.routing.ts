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
        {
            path: 'items',
            // component: BlogListComponent,
            children: [
                // {
                //     path: '',
                //     // component: BlogItemComponent
                // },
                {
                    path: ':id',
                    //  component: BlogItemComponent,
                    children: [
                        {
                            path: 'new',
                            canActivate: [ LoginGuard ],
                            component: EditBlogEntryFormComponent,
                            data: { title: 'NEW New entry' }
                        },
                        { 
                            path: 'edit',
                            // canActivate: [ LoginGuard ],
                            component: EditBlogEntryFormComponent,
                            data: { title: 'NEW Edit entry' },
                            //outlet: 'item-outlet' // must be in the same component!
                        },
                    ]
                }
            ]
        },
        { 
            path: 'new/:id',
            canActivate: [ LoginGuard ],
            component: EditBlogEntryFormComponent,
            data: { title: 'New entry' }
        },
        { 
            path: 'edit/:id',
            canActivate: [ LoginGuard ],
            component: EditBlogEntryFormComponent,
            data: { title: 'Edit entry' },
            //outlet: 'item-outlet' // must be in the same component!
        },
        { 
            path: 'item/:id',
            // component: BlogItemComponent,
            children: [
                {
                path: 'edit',
                component: EditBlogEntryFormComponent,
                data: { title: 'TEST Edit entry' },
                }
            ]
        }
    ] }
];
export const blogRoutingComponents = [
    BlogPageComponent, EditBlogEntryFormComponent
];
export const blogRoutingProviders = [ LoginGuard ];
export const blogRouting = RouterModule.forChild(blogRoutes);
