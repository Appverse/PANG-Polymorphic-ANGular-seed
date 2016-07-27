import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {RouterConfig, ActivatedRoute, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {CommonMenuComponent} from './menu.component.common';

@Component({
    moduleId: module.id,
    selector: 'mono-menu',
    templateUrl: 'menu.component.tns.html',
    styleUrls: ['menu.component.tns.css']
})
export class MenuComponent extends CommonMenuComponent {

    constructor(private _router: Router) {
        super();
    }

    ngAfterViewInit(){
        this.homeButton = this.homeButtonRef.nativeElement;
        this.productsButton = this.productsButtonRef.nativeElement;
    }

    public isRouterLinkActive(link): boolean{
        if(this._router.url.toLocaleLowerCase()==link.toLocaleLowerCase()){
            return true;
        } else{
            return false;
        }
    }

    public menuItemTap(link) {
        if (link !== this._router.url) {
            this._router.navigateByUrl(link);
        };
        this.highlightButton(link);
    }

    public highlightButton(button){
        if(button == "home"){
            this.homeButton.className = "menu-button-selected";
            this.productsButton.className = "menu-button";
        } else {
            this.homeButton.className = "menu-button";
            this.productsButton.className = "menu-button-selected";
        }
    }

    methodToImplement(stringArgument: string) {

    };

    @ViewChild('homeButton') homeButtonRef: ElementRef;
    private homeButton;
    @ViewChild('productsButton') productsButtonRef: ElementRef;
    private productsButton;

}
