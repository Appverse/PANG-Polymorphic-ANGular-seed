import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TrackingService } from './tracking/tracking.service.tns';

@Injectable()
export class RoutingService {

    constructor( private router: Router, trackingService: TrackingService) {
        router.events.filter(e => e instanceof NavigationEnd).subscribe( e => {
            trackingService.trackRoute(e['urlAfterRedirects']);
        });
    }

}
