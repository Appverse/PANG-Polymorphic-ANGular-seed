import { Injectable } from '@angular/core';
import { TrackingServiceCommon } from './tracking.service.common';
import { Http } from '@angular/http';
import { Config } from '../../app.config';

@Injectable()
export class TrackingService extends TrackingServiceCommon {

    private receivedRoutes: Array<string> = [];

    public constructor(config: Config, http: Http) {
        super(config, http);
        setInterval( () => {
            if (this.receivedRoutes.length > 0) {
                this.submitData();
                this.receivedRoutes = [];
            }
        }, 5000);
    }

    trackRoute(route: string): void {
        this.receivedRoutes.push(route);
    }

    submitData() {
        this.sendTrackingData(...this.receivedRoutes);
    }
}
