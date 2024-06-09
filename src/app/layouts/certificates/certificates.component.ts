import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Certificate } from 'src/app/models/certificate';

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
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    nav: false,
  };

  certificates: Certificate[] = [
    {
      name: 'Azure Fundamentals',
      description: 'Foundational knowledge of cloud services and how they are provided with Microsoft Azure.',
      tags: ['Azure', 'Cloud Certification', 'Cloud Services', 'Cloud Computing'],
      image: 'assets/images/certificates/azure.png',
      certificateUrl: "https://www.credly.com/badges/f398608d-1c6e-42f5-b6f8-97caf5bba69a/public_url"
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      description: 'Fundamental understanding of IT services and their uses in the AWS Cloud.',
      tags: ['AWS', 'Cloud Certification', 'Cloud Services', 'Cloud Computing'],
      image: 'assets/images/certificates/aws.png',
      certificateUrl: "https://www.credly.com/badges/7a267968-0b8d-45c6-9dd8-9ca96271f058/public_url"
    },
    {
      name: 'Cloud DevOps Engineer',
      description: 'Completed certification from Udacity for Cloud DevOps Engineer.',
      tags: ['AWS', 'CI/CD', 'Docker', 'Github Actions', 'Kubernetes'],
      image: 'assets/images/certificates/udacity_devops.png',
      certificateUrl: "https://www.udacity.com/certificate/e/4d2aa678-270c-11ee-927f-e3052194ead2"
    },
    {
      name: 'TOIEC Listening and Reading Test',
      description: 'Completed TOIEC Listening and Reading Test certification with score 760.',
      tags: ['English', 'Listening', 'Reading'],
      image: 'assets/images/certificates/toiec.png',
      certificateUrl: "https://drive.google.com/file/d/1lJq4TYwRvPmv3icAYz0iZkl3MQHOGK8b/view"
    }
  ]

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
