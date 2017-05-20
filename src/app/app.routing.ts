import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { BlogModule } from './modules/blog/blog.module';
import { AuthModule } from './modules/auth/auth.module';
import { authRoutes } from './modules/auth/auth.routing';
import { AuthComponent } from './modules/auth/auth-component/auth.component';

export function loadBlogModule() {
    return BlogModule;
}

export function loadAuthModule() {
    return AuthModule;
}

export const appRoutes: Routes = [
    { path: '', redirectTo: '/blog', pathMatch: 'full', data: { title: 'CK\'s microblog!' } },
    // { path: 'login', component: AuthComponent, children: [...authRoutes] },
    { path: 'login', loadChildren: loadAuthModule },
    { path: 'blog', canLoad: [], loadChildren: loadBlogModule }
];
export const appRouting = RouterModule.forRoot(appRoutes);
export const routingComponents = [
    AppComponent
];
export const routingProviders = [];
