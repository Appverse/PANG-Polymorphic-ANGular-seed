import {nativeScriptBootstrap} from "nativescript-angular/application";
import {nsProvideRouter} from "nativescript-angular/router";
import {NS_HTTP_PROVIDERS} from 'nativescript-angular/http';
import {AppComponent, APP_ROUTES} from "./client/app.component";

nativeScriptBootstrap(AppComponent, [
  nsProvideRouter(APP_ROUTES, { enableTracing: false }),
  NS_HTTP_PROVIDERS]
)

