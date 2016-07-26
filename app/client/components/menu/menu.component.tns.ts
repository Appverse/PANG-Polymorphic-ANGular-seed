import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {RouterConfig, ActivatedRoute, ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'mono-menu',
    templateUrl: 'menu.component.tns.html',
    styleUrls: ['menu.component.tns.css']
})
export class MenuComponent implements OnInit {

    @Input() public toggled: boolean;
    @Output() close = new EventEmitter();

    constructor(private _router: Router) { }

    ngOnInit() {
    }

    public menuItemTap(link) {
        if (link !== this._router.url) {
            this._router.navigateByUrl(link);
        };
        this.toggled = false;
    }


}
