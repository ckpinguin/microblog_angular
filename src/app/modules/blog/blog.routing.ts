import { Routes, RouterModule } from '@angular/router';

import { BlogPageComponent } from './blog-page/blog-page.component';
import { EditBlogEntryFormComponent } from './edit-blog-entry-form/edit-blog-entry-form.component';
import { LoginGuard } from '../auth/login/login.guard';

export const blogRoutes: Routes = [ {
    // path '' is the component holding the outlet
    path: '', component: BlogPageComponent, data: { title: 'Blog' },
    children: [
        { path: 'edit/:id',
            canActivate: [ LoginGuard ]
            // componentless (just activates edit-form-part of blog-page)
        }
    ] }
];
export const blogRoutingComponents = [
    BlogPageComponent, EditBlogEntryFormComponent
];
export const blogRoutingProviders = [ LoginGuard ];
export const blogRouting = RouterModule.forChild(blogRoutes);
