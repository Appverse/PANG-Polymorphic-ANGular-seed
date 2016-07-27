import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "home",
    templateUrl: 'home.component.tns.html'
})
export class HomeComponent {
    private title: string = "Monomorphic Seed";
    private description: string = "A starter project to help build monomorphic applications in Angular 2 + typescript + nativescript";
}
