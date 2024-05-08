import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'HTML',
      imageUrl: 'assets/images/skills/html5-original-wordmark.svg'
    },
    {
      name: 'CSS',
      imageUrl: 'assets/images/skills/css3-original-wordmark.svg'
    },
    {
      name: 'JavaScript',
      imageUrl: 'assets/images/skills/javascript-original.svg'
    },
    {
      name: 'TypeScript',
      imageUrl: 'assets/images/skills/typescript-original.svg'
    },
    {
      name: 'Angular',
      imageUrl: 'assets/images/skills/angular.svg'
    },
    {
      name: 'Ng-Zorro',
      imageUrl: 'assets/images/skills/ng-zorro.svg'
    },
    {
      name: '.NET',
      imageUrl: 'assets/images/skills/dot-net-original-wordmark.svg'
    },
    {
      name: 'EF Core',
      imageUrl: 'assets/images/skills/ef-core.png'
    },
    {
      name: 'SQL Server',
      imageUrl: 'assets/images/skills/microsoft-sql-server-logo.svg'
    },
    {
      name: 'MongoDB',
      imageUrl: 'assets/images/skills/mongodb-original-wordmark.svg'
    },

    {
      name: 'AWS',
      imageUrl: 'assets/images/skills/amazonwebservices-original-wordmark.svg'
    },
    {
      name: 'Azure',
      imageUrl: 'assets/images/skills/microsoft_azure-icon.svg'
    },
    {
      name: 'Redis',
      imageUrl: 'assets/images/skills/redis-original-wordmark.svg'
    },
    {
      name: 'RabbitMQ',
      imageUrl: 'assets/images/skills/rabbitmq-icon.svg'
    },
    {
      name: 'Docker',
      imageUrl: 'assets/images/skills/docker-original-wordmark.svg'
    },
    {
      name: 'Kubernetes',
      imageUrl: 'assets/images/skills/kubernetes-icon.svg'
    },
    {
      name: 'Miroservies',
      imageUrl: 'assets/images/skills/microservices.png'
    },
    {
      name: 'Git',
      imageUrl: 'assets/images/skills/git-scm-icon.svg'
    },
    {
      name: 'Figma',
      imageUrl: 'assets/images/skills/figma-icon.svg'
    },
  ]
}
export interface Skill {
  name: string;
  imageUrl: string;
}