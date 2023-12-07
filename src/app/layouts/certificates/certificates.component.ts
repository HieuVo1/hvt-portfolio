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
      image: 'assets/images/certificates/azure.png'
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      description: 'Fundamental understanding of IT services and their uses in the AWS Cloud.',
      tags: ['AWS', 'Cloud Certification', 'Cloud Services', 'Cloud Computing'],
      image: 'assets/images/certificates/aws.png'
    },
    {
      name: 'Cloud DevOps Engineer',
      description: 'Completed certification from Udacity for Cloud DevOps Engineer.',
      tags: ['AWS', 'CI/CD', 'Docker', 'Github Actions', 'Kubernetes'],
      image: 'assets/images/certificates/udacity_devops.png'
    },
    {
      name: 'TOIEC Listening and Reading Test',
      description: 'Completed TOIEC Listening and Reading Test certification with score 760.',
      tags: ['English', 'Listening', 'Reading'],
      image: 'assets/images/certificates/toiec.png'
    }
  ]
}
