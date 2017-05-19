import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from '../auth/login/login-page/login-page.component';
import { AppComponent } from '../../app.component';
import { blogRoutes, blogRoutingComponents } from '../blog/blog.routing';
export const appRoutes: Routes = [
    { path: '', redirectTo: '/blog', pathMatch: 'full', data: { title: 'CK\'s microblog!' } },
    { path: 'login', component: LoginPageComponent, data: { title: 'Login' } },
    { path: 'blog', children: blogRoutes }
];
export const appRouting = RouterModule.forRoot(appRoutes);
export const routingComponents = [
    AppComponent, LoginPageComponent
];
