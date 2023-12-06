import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      200: {
        items: 1
      },
      300: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    },
    nav: false,
  };
}
