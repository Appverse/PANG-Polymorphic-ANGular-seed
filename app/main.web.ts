/*
    This is the Webapp entry point.
    It is marked as entry in the webpack config.
*/

import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide, PLATFORM_DIRECTIVES} from '@angular/core';
import {provideRouter, ROUTER_DIRECTIVES} from "@angular/router";
import {HTTP_PROVIDERS} from '@angular/http';

import {AppComponent, APP_ROUTES} from "./client/app.component";
import {Config, WEB_CONFIG}    from './client/app.config';

require('./app.scss'); // Global styles are injected

bootstrap(AppComponent, [
    provide(Config, { useValue: WEB_CONFIG }),
    provideRouter(APP_ROUTES),
    provide(PLATFORM_DIRECTIVES, {useValue: ROUTER_DIRECTIVES, multi: true}),
    HTTP_PROVIDERS
]);
