import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { BlogModule } from './modules/blog/blog.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

export function loadBlogModule() {
    return BlogModule;
}

export function loadAuthModule() {
    return AuthModule;
}

export function loadUserModule() {
    return UserModule;
}

export const appRoutes: Routes = [
    { path: '', redirectTo: '/blog', pathMatch: 'full', data: { title: 'CK\'s microblog!' } },
    { path: 'login', loadChildren: loadAuthModule },
    { path: 'blog', loadChildren: loadBlogModule },
    { path: 'user', loadChildren: loadUserModule }
];
export const appRouting = RouterModule.forRoot(appRoutes);
export const routingComponents = [
    AppComponent
];
export const routingProviders = [];
