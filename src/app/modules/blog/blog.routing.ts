import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from '../blog/blog-component/blog.component';
import { BlogPageComponent } from '../blog/blog-page/blog-page.component';
import { EditBlogEntryFormComponent } from '../blog/edit-blog-entry-form/edit-blog-entry-form.component';

export const blogRoutes: Routes = [ {
    // path '' is the component holding the outlet
    path: '', component: BlogComponent, data: { title: 'Blog' },
    children: [
        { path: '', component: BlogPageComponent },
        { path: 'edit/:id', component: EditBlogEntryFormComponent },
    ] }
];
export const blogRoutingComponents = [
    BlogPageComponent, EditBlogEntryFormComponent, BlogComponent
];
export const blogRoutingProviders = [ ];
export const blogRouting = RouterModule.forChild(blogRoutes);
