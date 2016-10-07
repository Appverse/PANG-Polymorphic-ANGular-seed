import { Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {CommonMenuComponent} from './menu.component.common';

@Component({
    moduleId: module.id,
    selector: 'pang-menu',
    templateUrl: 'menu.component.tns.html',
    styleUrls: ['menu.component.tns.css']
})
export class MenuComponent extends CommonMenuComponent implements AfterViewInit {



    @ViewChild('homeButton') homeButtonRef: ElementRef;
    @ViewChild('productsButton') productsButtonRef: ElementRef;
    private homeButton;
    private productsButton;

    constructor(private router: Router) {
        super();
    }

    ngAfterViewInit() {
        this.homeButton = this.homeButtonRef.nativeElement;
        this.productsButton = this.productsButtonRef.nativeElement;
    }

    public isRouterLinkActive(link): boolean {
        if (this.router.url.toLocaleLowerCase() === link.toLocaleLowerCase()) {
            return true;
        } else {
            return false;
        }
    }

    public menuItemTap(link) {
        if (link !== this.router.url) {
            this.router.navigateByUrl(link);
        };
        this.highlightButton(link);
    }

    public highlightButton(button) {
        if (button === 'home') {
            this.homeButton.className = 'menu-button-selected';
            this.productsButton.className = 'menu-button';
        } else {
            this.homeButton.className = 'menu-button';
            this.productsButton.className = 'menu-button-selected';
        }
    }

    methodToImplement(stringArgument: string) {

    };
}
