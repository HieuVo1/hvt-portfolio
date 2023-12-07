import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private menuDrawerVisible = new Subject<boolean>();
  private closeMenuDrawer = new Subject<boolean>();

  menuDrawerVisibleEmitted$ = this.menuDrawerVisible.asObservable();

  constructor() { }

  menuDrawerVisibleEvent(isVisible: boolean) {
    console.log(isVisible);
    this.menuDrawerVisible.next(isVisible);
  }
}
