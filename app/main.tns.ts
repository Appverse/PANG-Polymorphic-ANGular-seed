/*
    This is the Nativescript entry point.
    Nativescript engine loads this file as it's referenced in app/package.json as 'main'
*/

import {nativeScriptBootstrap} from "nativescript-angular/application"; // put as first import, or else...
import {provide, PLATFORM_DIRECTIVES} from '@angular/core';
import {nsProvideRouter, NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {NS_HTTP_PROVIDERS} from 'nativescript-angular/http';

import {AppComponent, APP_ROUTES} from "./client/app.component";
import {Config, TNS_CONFIG}    from './client/app.config';

nativeScriptBootstrap(AppComponent, [
    provide(Config, { useValue: TNS_CONFIG }),
    nsProvideRouter(APP_ROUTES, { enableTracing: false }),
    provide(PLATFORM_DIRECTIVES, { useValue: ROUTER_DIRECTIVES, multi: true }), 
    provide(PLATFORM_DIRECTIVES, { useValue: NS_ROUTER_DIRECTIVES, multi: true }),
    NS_HTTP_PROVIDERS
]);
