import {Component} from "@angular/core";
import {NavService} from "./nav/nav.serivce";
import {ObservingComponent} from "./obs/obs.component";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES,ObservingComponent,HeaderComponent],
  providers: [NavService]
})
export class AppComponent {
  title = "Angular 2 - event delegation";
  showObsComp = true;
  constructor() { console.clear(); }
}
