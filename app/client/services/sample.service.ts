import {Injectable, Inject} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http"
import * as Rx from "rxjs";
import {models, Routes} from "../../common"
import {Config} from '../app.config'

@Injectable()
export class SampleService {

    constructor(private config: Config, private _http: Http) {
    }


    public getProducts(): Rx.Observable<models.Product[]> {
        return this._http
            .get(this.generateApiUrl(Routes.PRODUCTS_LIST.url))
            .map(response => response.json())
            .catch(this.handleError);
    }

    public getProduct(id: number): Rx.Observable<models.Product> {
        return this._http
            .get(this.generateApiUrl(Routes.PRODUCT_DETAIL.url, [{ key: Routes.PRODUCT_DETAIL.params.id, value: id }]))
            .map(response => response.json())
            .catch(this.handleError);
    }

    private generateApiUrl(route: string, params?: { key: string, value: any }[]) {
        let url = this.config.SERVICES_URL + route;
        if (params) {
            for (let index = 0; index < params.length; index++) {
                let param = params[index];
                url = url.replace(param.key, param.value);
            }
        }
        return url;
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx.Observable.throw(errMsg);
    }
}
