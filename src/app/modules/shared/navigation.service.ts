import { Injectable } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


@Injectable()
export class NavigationService {

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    navigateHome(queryParams) {
        // const queryParams = this.activatedRoute.snapshot.queryParams;
        const redirect = queryParams['redirect'] || '/';
        this.router.navigateByUrl(decodeURI(redirect));
    }

    navigateBack(queryParams) {
        this.router.navigate([ '..' ]); // Bug: Goes back to /
    }

}
