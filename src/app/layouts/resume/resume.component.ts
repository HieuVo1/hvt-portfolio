import { Component } from '@angular/core';
import { Education } from 'src/app/models/education';
import { Experience } from 'src/app/models/experience';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  toDate = new Date();
  experiences: Experience[] = [
    {
      companyName: 'FPTSoftware',
      jobTitle: 'Junior .Net Developer',
      jobDescription: [
        'Troubleshot and resolved performance issues for databases and software.',
        'Researched and integrated design strategies, product specifications, and development schedules into product capabilities.',
        'Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs, and enhancements.'
      ],
      startDate: new Date(2021, 6, 1),
      endDate: new Date(2025, 6, 1),
    },
    {
      companyName: 'Sorimachi Viet Nam',
      jobTitle: 'Fresher .Net Developer',
      jobDescription: [
        'Corrected, modified and upgraded software to improve performance.',
        'Authored code fixes and enhancements for inclusion in future code releases and patches.',
      ],
      startDate: new Date(2020, 5, 1),
      endDate: new Date(2020, 11, 1),
    }
  ];

  educations: Education[] = [
    {
      schoolName: 'University of Information Technology',
      major: 'Bachelor of Information System',
      description: 'Develop research to enhance knowledge exploitation from databases, manage large data warehouses, search for information on the web, semantic search, and social networks.',
      startDate: new Date(2017, 6, 1),
      endDate: new Date(2021, 6, 1),
      logo: 'assets/images/logo-UIT.png'
    }
  ]
}
