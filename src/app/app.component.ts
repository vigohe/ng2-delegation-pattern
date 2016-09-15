import {Component}    from '@angular/core';
import {NavService} from "./nav/nav.serivce";
import {ObservingComponent} from "./obs/obs.component";
import {Navigation} from "./nav/nav.component";

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  directives: [Navigation, ObservingComponent],
  providers: [NavService]
})
export class AppComponent {
  title = "Angular 2 - event delegation";
  showObsComp = true;
  constructor() { console.clear(); }
}
