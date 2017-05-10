import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { AppComponent } from './app.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

export const appRoutes: Routes = [
    { path: '', component: BlogPageComponent, data: {title: 'CK\'s microblog!'} },
    { path: 'blog', component: BlogPageComponent, data: {title: 'Blog'}},
    { path: 'login', component: LoginFormComponent, data: {title: 'Login'} }
];
export const appRouting = RouterModule.forRoot(appRoutes);
export const routingComponents = [
    AppComponent, LoginFormComponent, BlogPageComponent
];
