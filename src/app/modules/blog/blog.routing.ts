import { Routes, RouterModule } from '@angular/router';

import { BlogPageComponent } from '../blog/blog-page/blog-page.component';
import { EditBlogEntryFormComponent } from '../blog/edit-blog-entry-form/edit-blog-entry-form.component';
import { BlogComponent } from '../blog/blog-component/blog.component';

export const blogRoutes: Routes = [ {
    path: '', component: BlogComponent, data: { title: 'Blog' },
    children: [
        { path: '', component: BlogPageComponent },
        { path: 'edit/:id', component: EditBlogEntryFormComponent },
    ] }
];
export const blogRoutingComponents = [
    BlogPageComponent, EditBlogEntryFormComponent
];
