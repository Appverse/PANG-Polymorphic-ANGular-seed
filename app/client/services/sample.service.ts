import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as Rx from 'rxjs';
import { apiManager } from '../app.api-manager';
import { models, Routes } from '../../common';
import { Config } from '../app.config';

@Injectable()
export class SampleService {

    constructor(private config: Config, private _http: Http) {
    }

    public getProducts(): Rx.Observable<models.Product[]> {
        return this._http
            .get(apiManager.generateApiUrl(this.config, Routes.PRODUCTS_LIST.url))
            .map(response => response.json())
            .catch(apiManager.handlePromiseError);
    }

    public getProduct(id: number): Rx.Observable<models.Product> {
        return this._http
            .get(apiManager.generateApiUrl(this.config, Routes.PRODUCT_DETAIL.url, [{ key: Routes.PRODUCT_DETAIL.params.id, value: id }]))
            .map(response => response.json())
            .catch(apiManager.handlePromiseError);
    }
}
