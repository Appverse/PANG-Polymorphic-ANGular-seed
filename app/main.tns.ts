import {nativeScriptBootstrap} from "nativescript-angular/application";
import {nsProvideRouter} from "nativescript-angular/router";
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent, APP_ROUTES} from "./client/app.component";

nativeScriptBootstrap(AppComponent, [
  nsProvideRouter(APP_ROUTES, { enableTracing: false }),
  HTTP_PROVIDERS]
).catch(err => console.error(err));

