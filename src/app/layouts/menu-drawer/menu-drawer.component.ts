import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { DrawerService } from 'src/app/drawer.service';

@Component({
  selector: 'app-menu-drawer',
  templateUrl: './menu-drawer.component.html',
  styleUrls: ['./menu-drawer.component.css']
})
export class MenuDrawerComponent implements OnInit {
  isVisible = false;
  constructor(
    private readonly drawerService: DrawerService
  ) { }

  ngOnInit(): void {
    this.drawerService.menuDrawerVisibleEmitted$.subscribe((isVisible) => {
      this.isVisible = isVisible;
    });
  }

  closeMenu(): void {
    this.isVisible = false;
  }

  scrollTo(componentId: string) {
    this.closeMenu();

    setTimeout(() => {
      document.getElementById(componentId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center"
      });
    }, 400)
  }
}
