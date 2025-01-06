import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'eShopicaOnContainer',
      description:
        '🤖 Microservices project follow by N-tier architecture & NET-Microservices-Architecture-for-Containerized-NET-Applications Document.',
      technologies: ['.NET', 'Docker', 'RabbitMQ', 'Azure Service Bus'],
      repoLink: 'https://dev.azure.com/shopica/_git/ShopicaOnContainer',
    },
    {
      name: 'CI/CD-Movie',
      description:
        '🚀 Using Github Actions to automate testing, building and deploying their applications to an existing Kubernetes cluster.',
      technologies: ['React', 'TypeScript', 'Flask', 'Python', 'Kubernetes'],
      repoLink: 'https://github.com/HieuVo1/CICD-Movie',
    },
    {
      name: 'wts-erp',
      description:
        '🔥 ERP software system for internal company. Including all the core business  proscesses need to run a company like finance, HR, manufacturing, supply chain, services, procurement, and others.',
      technologies: [
        '.NET',
        'EF Core',
        '.NET Aspire',
        'N-tier architecture',
        'PostgreSQL',
        'React',
        'Material UI',
        'TypeScript',
      ],
      repoLink: '',
    },
    {
      name: 'cocauru',
      description:
        '🔥 Support build CI/CD, IaC for ecommerce application instead of manual deployment for 4 hours. Add AWS EventBridge to decrease cost for 10 EC2 Crawler run on EC2',
      technologies: ['AWS EC2', 'Terraform', 'AMI', 'Laravel', 'MySQL'],
      repoLink: '',
    },
    {
      name: 'hvt-portfolio',
      description:
        '🔥 Personal Portfolio project using Github Actions deploy to AWS S3.',
      technologies: ['Angular', 'Ng-Zorro', 'TypeScript', 'CI/CD', 'AWS S3'],
      repoLink: 'https://github.com/HieuVo1/hvt-portfolio',
    },

    {
      name: 'Azure-AI',
      description:
        '🎉 Research project with Azure AI Services like Document Intelligence, Speech-to-text,Translation,...',
      technologies: ['.NET', 'C#', 'Azure AI Services'],
      repoLink: 'https://github.com/HieuVo1/Azure-AI',
    },
    {
      name: 'shopica-client',
      description:
        '📍A eCommerce website for clothing using Github Actions deploy to AWS S3.',
      technologies: ['Angular', 'Ng-Zorro', '.NET', 'SQLServer', 'AWS'],
      repoLink: 'https://shopica-client.hvtauthor.com/',
    },
    {
      name: 'shopica-recommender-system',
      description: '🤖 Recommendation API for eCommerce website for clothing.',
      technologies: ['Django', 'MySQL', 'scikit-surprise'],
      repoLink: 'https://github.com/HieuVo1/shopica-recommender-system',
    },
  ];

  goToLink(url: string) {
    if (url) window.open(url, '_blank');
  }
}
