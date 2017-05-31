import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';

import { BlogModule } from './modules/blog/blog.module';
import { AuthModule } from './modules/auth/auth.module';
import { LoginGuard } from './modules/auth/login/login.guard';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/blog', pathMatch: 'full', data: { title: 'CK\'s microblog!' } },
    // We lazy-load the modules with a preloading strategy (loads in background)
    { path: 'home', redirectTo: '/blog' },
    { path: 'blog', loadChildren: 'app/modules/blog/blog.module#BlogModule' },
    { path: 'login', loadChildren: 'app/modules/auth/auth.module#AuthModule' },
    { path: 'admin', canLoad: [ LoginGuard ], loadChildren: 'app/modules/admin/admin.module#AdminModule' }
    // { path : '**', redirectTo: '/blog' }
];
export const appRouting = RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
});
export const routingComponents = [
    AppComponent
];
export const routingProviders = [ LoginGuard ];
