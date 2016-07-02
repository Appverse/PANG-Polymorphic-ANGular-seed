import {bootstrap} from '@angular/platform-browser-dynamic';
import {provideRouter} from "@angular/router";
import {HTTP_PROVIDERS} from '@angular/http';
import {provide} from '@angular/core';

import {AppComponent, APP_ROUTES} from "./client/app.component";

require('./app.scss')
bootstrap(AppComponent, [
  provideRouter(APP_ROUTES),
  HTTP_PROVIDERS])
  .catch(err => console.error(err));
