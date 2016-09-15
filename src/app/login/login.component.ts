import {Component, OnInit, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {NavService} from "../nav/nav.serivce";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _navService:NavService) {}

  ngOnInit() {
    this._navService.changeNav(999);
  }

}
