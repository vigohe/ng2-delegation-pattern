/**
 * Created by vigohe on 15-09-16.
 */
import {Injectable}      from '@angular/core'
import {Subject} from 'rxjs/Subject';

@Injectable()
export class NavService {
  // Observable navItem source
  private _navItemSource = new Subject<number>();
  // Observable navItem stream
  navItem$ = this._navItemSource.asObservable();
  // service command
  changeNav(number) {
    this._navItemSource.next(number);
  }
}
