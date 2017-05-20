import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './navbar/navbar.component';
import { ShowErrorComponent } from './show-error/show-error.component';

import { NavigationService } from './navigation.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule
    ],
    declarations: [
        ShowErrorComponent,
        NavBarComponent
    ],
    exports: [
        ShowErrorComponent,
        NavBarComponent,
        CommonModule,
        HttpModule,
        FormsModule
    ]
})
export class SharedModule {
    // Service providers have to be put here instead of
    // the @NgModule annotation! This static addition to the
    // Module has to be imported in root App Module only!
    // The other modules only import the Module itself (without
    // forRoot() )
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ NavigationService ]
        };
    }
}
