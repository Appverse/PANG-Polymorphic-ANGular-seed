import {Component} from "@angular/core";
import {RouterConfig} from '@angular/router';

// Shared service
import {SampleService} from './services/sample.service';

// Platform dependent component (.tns replaced by .web)
import {MenuComponent} from "./components/menu/menu.component.tns";

// Multiplatform components
import {HomeComponent} from "./pages/home/home.component";
import {ProductsComponent} from "./pages/products/products.component";


@Component({
    moduleId: module.id,
    selector: "mono-app",
    directives: [MenuComponent],
    providers: [SampleService],
    templateUrl: "app.component.tns.html"
})
export class AppComponent {
    constructor() {
        AppComponent.hideActionBarInAndroid();
    }

    private static hideActionBarInAndroid() {
        if (!webapp) { // global.web is defined during compile time in webpack, making this code unreachable in WEB.
            try {
                let topmost = require("ui/frame").topmost();
                topmost.currentPage.actionBarHidden = true;
            } catch (e) {
                console.error(e);
            }
        }
    }
}

export const APP_ROUTES: RouterConfig = [
    { path: '', redirectTo: '/home', terminal: true},
    { path: "home", component: HomeComponent},
    { path: "products", component: ProductsComponent}
]
