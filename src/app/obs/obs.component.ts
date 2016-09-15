import {Subscription} from "rxjs/Subscription";
import {NavService} from "../nav/nav.serivce";
import {Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef} from "@angular/core";
/**
 * Created by vigohe on 15-09-16.
 */

@Component({
  selector: 'obs-comp',
  moduleId: module.id,
  templateUrl: 'obs.component.html'
})
export class ObservingComponent implements OnInit,OnDestroy{
  item: number;
  subscription:Subscription;
  constructor(private _navService:NavService,private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit() {
    this.subscription = this._navService.navItem$.subscribe(
      item => {this.item = item; this.changeDetectorRef.detectChanges();}
    );
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}
