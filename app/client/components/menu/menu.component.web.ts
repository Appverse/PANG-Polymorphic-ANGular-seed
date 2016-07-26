import { Component, OnInit } from '@angular/core';
import {CommonMenuComponent} from './menu.component.common';

@Component({
    moduleId: module.id,
    selector: 'mono-menu',
    templateUrl: 'menu.component.web.html'
})
export class MenuComponent extends CommonMenuComponent {
    constructor() {
        super();
    }
}
