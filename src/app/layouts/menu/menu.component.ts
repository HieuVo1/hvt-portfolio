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

  // onVoiceSearch(): void {
  //   const speechConfig = sdk.SpeechConfig.fromSubscription('e9621116e089404b916572ffb4b2fd0e', 'southeastasia');
  //   const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
  //   const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

  //   recognizer.recognizeOnceAsync(
  //     result => {
  //       if (result.text.toLowerCase().includes('about')) {
  //         this.scrollTo('about');
  //       }
  //       if (result.text.toLowerCase().includes('skills') || result.text.toLowerCase().includes('skill')) {
  //         this.scrollTo('skills');
  //       }
  //       if (result.text.toLowerCase().includes('certificates') || result.text.toLowerCase().includes('certificate')) {
  //         this.scrollTo('certificates');
  //       }
  //       if (result.text.toLowerCase().includes('projects') || result.text.toLowerCase().includes('project')) {
  //         this.scrollTo('projects');
  //       }
  //       if (result.text.toLowerCase().includes('resume')) {
  //         this.scrollTo('resume');
  //       }
  //       if (result.text.toLowerCase().includes('contact')) {
  //         this.scrollTo('contact');
  //       }
  //       if (result.text.toLowerCase().includes('chat')) {
  //         this.drawerService.chatVisibleEvent(true);
  //       }
  //       console.log(`RECOGNIZED: Text=${result.text}`);
  //       // Here you can use the recognized text for search or other purposes
  //       recognizer.close();
  //     },
  //     err => {
  //       console.log(`ERROR: ${err}`);
  //       recognizer.close();
  //     }
  //   );
  // }
}
