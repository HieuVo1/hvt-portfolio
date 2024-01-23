import { Component } from '@angular/core';
import { DrawerService } from 'src/app/drawer.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  numMessageUnRead: number = 0;
  isShowMessagesFrame: boolean = false;
  constructor(private drawerService: DrawerService) {
    this.drawerService.chatVisibleEmitted$.subscribe(isVisible => {
      this.isShowMessagesFrame = isVisible;
    });
  }
}
