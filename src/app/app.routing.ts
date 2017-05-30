import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';

import { BlogModule } from './modules/blog/blog.module';
import { AuthModule } from './modules/auth/auth.module';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/blog', pathMatch: 'full', data: { title: 'CK\'s microblog!' } },
    // We lazy-load the modules with a preloading strategy (loads in background)
    { path: 'login', loadChildren: 'app/modules/auth/auth.module#AuthModule' },
    { path: 'blog', loadChildren: 'app/modules/blog/blog.module#BlogModule' },
    // { path : '**', redirectTo: '/blog' }
];
export const appRouting = RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
});
export const routingComponents = [
    AppComponent
];
export const routingProviders = [];
