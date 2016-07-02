import {Component} from "@angular/core";
import {RouterConfig, ROUTER_DIRECTIVES} from '@angular/router';
import {HTTP_PROVIDERS} from "@angular/http";

import {ProductsPage} from "./pages/products/products.component";

@Component({
    moduleId: module.id,
    selector: "my-app",
    directives: [ROUTER_DIRECTIVES],
    templateUrl: "app.component.tns.html",
    styleUrls: ['app.component.tns.css'],
})
export class AppComponent {
}

export const APP_ROUTES: RouterConfig = [
    { path: '', redirectTo: '/products', terminal: true },
    { path: "products", component: ProductsPage }
]
