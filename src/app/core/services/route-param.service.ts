import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";

@Injectable()
export class RouteParamService {

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    setRouteParam(url, obj) {
        const navigationExtras: NavigationExtras = {
            queryParams: obj,
        };
        this.router.navigate([url], navigationExtras);
    }

    getRouteParam() {
        return this.route.snapshot.queryParams;
    }
}
