import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Ng-Zorro',
    '.NET',
    'EF Core',
    'SQL Server',
    'Microservices',
    'RabbitMQ',
    'Azure Service Bus',
    'Redis',
    'Git',
    'CI/CD',
    'Docker',
    'Kubernetes',
    'AWS',
    'Azure'
  ]
}
