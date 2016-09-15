import {RouterConfig, provideRouter} from "@angular/router";
import {LoginComponent} from "./login/login.component";
/**
 * Created by vigohe on 15-09-16.
 */


const routes: RouterConfig = [
  {
    path: '',
    component: LoginComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
