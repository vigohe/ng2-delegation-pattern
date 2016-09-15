import {Component} from "@angular/core";
import {NavService} from "./nav.serivce";
/**
 * Created by vigohe on 15-09-16.
 */

@Component({
  selector: 'my-nav',
  moduleId: module.id,
  templateUrl: 'nav.component.html'
})
export class Navigation {

  constructor(private _navService:NavService) {}
  selectedNavItem(item: number) {
    console.log('selected nav item ' + item);
    this._navService.changeNav(item);
  }
}
