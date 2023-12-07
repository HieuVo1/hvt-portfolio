import { Component, HostListener } from '@angular/core';
import { DrawerService } from 'src/app/drawer.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isScrollUp: boolean = false;
  prevPosition = 0;
  currentComponent: string = 'about';

  constructor(private readonly drawerService: DrawerService) { }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition < this.prevPosition && scrollPosition > 100) {
      this.isScrollUp = true;
    }
    else {
      this.isScrollUp = false;
    }

    if (scrollPosition === 0) {
      this.isScrollUp = false;
    }

    this.prevPosition = scrollPosition;
  }

  scrollTo(componentId: string) {
    this.currentComponent = componentId;
    document.getElementById(componentId)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });
  }

  openMenu() {
    this.drawerService.menuDrawerVisibleEvent(true);
  }
}
