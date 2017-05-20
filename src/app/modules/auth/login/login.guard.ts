import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,
     RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(
        private loginService: LoginService,
        private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : boolean | Observable <boolean> | Promise <boolean> {
        if (!this.loginService.isLoggedIn()) {
            const url = encodeURI(state.url);
            this.router.navigate(['/login'], {
                queryParams: {
                    redirect: url
                }
            });
        }
        return true;
    }
}

