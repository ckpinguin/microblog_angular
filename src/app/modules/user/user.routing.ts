import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user-component/user.component';

export const userRoutes: Routes = [ {
    // path '' is the component holding the outlet
    path: '', component: UserComponent, data: { title: 'User' },
    children: [
        { path: '', redirectTo: '/login' },
    ] }
];
export const userRoutingComponents = [
    UserComponent
];
export const userRoutingProviders = [ ];
export const userRouting = RouterModule.forChild(userRoutes);
