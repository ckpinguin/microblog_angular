import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './modules/auth/login/login-page/login-page.component';
import { AppComponent } from './app.component';
import { BlogPageComponent } from './modules/blog/blog-page/blog-page.component';

export const appRoutes: Routes = [
    { path: '', component: BlogPageComponent, data: {title: 'CK\'s microblog!'} },
    { path: 'blog', component: BlogPageComponent, data: {title: 'Blog'}},
    { path: 'login', component: LoginPageComponent, data: {title: 'Login'} }
];
export const appRouting = RouterModule.forRoot(appRoutes);
export const routingComponents = [
    AppComponent, LoginPageComponent, BlogPageComponent
];
