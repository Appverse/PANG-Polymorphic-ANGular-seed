import {Component, ElementRef} from "@angular/core";
import * as Rx from "rxjs";
import {models} from "../../../common/models"

import {SampleService} from '../../services/sample.service';

@Component({
    moduleId: module.id,
    selector: "my-products",
    templateUrl: 'products.component.tns.html',
})
export class ProductsComponent {

    private title: string = "Products List";
    private description: string = "API routes and interfaces are shared between server and clients";

    private products: models.Product[];
    private loadedProduct: models.Product;

    public constructor(private sampleService: SampleService) {
        sampleService.getProducts()
            .subscribe(products => this.products = products);
    }

    select(product: models.Product) {
        this.sampleService.getProduct(product.id)
            .subscribe(product => this.loadedProduct = product);
    }

    /**
     * Sometimes, components can be almost fully reused between platforms
     * global.android and global.web can help implement small platform specific logic
     */
    remove(product: models.Product, event?: any) {
        if (!webapp && global.android) {
            let explosion = require('nativescript-explosionfield');
            explosion.explode(event.object._parent._parent);
            setTimeout(() => {
                this.removeProduct.call(this, product.id);
            }, 500);
        } else {
            this.removeProduct.call(this, product.id);
        }
    }

    private removeProduct(id: number) {
        for (var index = 0; index < this.products.length; index++) {
            if (id === this.products[index].id) {
                this.products.splice(index, 1);
            };
        }
    }
}
