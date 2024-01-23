import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private menuDrawerVisible = new Subject<boolean>();
  private chatVisible = new Subject<boolean>();

  menuDrawerVisibleEmitted$ = this.menuDrawerVisible.asObservable();
  chatVisibleEmitted$ = this.chatVisible.asObservable();

  constructor() { }

  menuDrawerVisibleEvent(isVisible: boolean) {
    this.menuDrawerVisible.next(isVisible);
  }

  chatVisibleEvent(isVisible: boolean) {
    this.chatVisible.next(isVisible);
  }
}
