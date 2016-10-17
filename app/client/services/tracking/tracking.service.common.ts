import { Http } from '@angular/http';
import { Routes } from '../../../common';
import { apiManager } from '../../app.api-manager';
import * as Rx from 'rxjs';
import { Config } from '../../app.config';

export abstract class TrackingServiceCommon {

    constructor(private config: Config, private http: Http) {
    }

    public abstract trackRoute(route: string): void;

    public abstract submitData(route?: string): void;

    public sendTrackingData(...data: String[]): Promise<any> {
        console.log('sendingTrackingData', apiManager.generateApiUrl(this.config, Routes.TRACKING.url));
        return this.http
            .post(apiManager.generateApiUrl(this.config, Routes.TRACKING.url), { routes: data})
            .toPromise()
            .catch(apiManager.handlePromiseError);
    }
}
