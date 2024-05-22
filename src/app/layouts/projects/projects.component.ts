import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: "CI/CD-Movie",
      description: "🚀 Using Github Actions to automate testing, building and deploying their applications to an existing Kubernetes cluster.",
      technologies: ['React', 'TypeScript', 'Flask', 'Python', 'Kubernetes'],
      repoLink: "https://github.com/HieuVo1/CICD-Movie"
    },
    {
      name: "hvt-portfolio",
      description: "🔥 Personal Portfolio project using Github Actions deploy to AWS S3.",
      technologies: ['Angular', 'Ng-Zorro', 'TypeScript', 'CI/CD', 'AWS S3'],
      repoLink: "https://github.com/HieuVo1/hvt-portfolio"
    },
    {
      name: "eShopicaContainer",
      description: "🤖 Microservices project follow by NET-Microservices-Architecture-for-Containerized-NET-Applications Document.",
      technologies: ['.NET', 'Docker', 'RabbitMQ', 'Azure Service Bus'],
      repoLink: "https://shopica-api.hvtauthor.com/healthchecks-ui"
    },
    {
      name: "Azure-AI",
      description: "🎉 Research project with Azure AI Services like Document Intelligence, Speech-to-text,Translation,...",
      technologies: ['.NET', 'C#', 'Azure AI Services'],
      repoLink: "https://github.com/HieuVo1/Azure-AI"
    },
    {
      name: "shopica-client",
      description: "📍A eCommerce website for clothing using Github Actions deploy to AWS S3.",
      technologies: ['Angular', 'Ng-Zorro', '.NET', 'SQLServer', 'AWS'],
      repoLink: "https://shopica-client.hvtauthor.com/"
    },
    {
      name: "shopica-recommender-system",
      description: "🤖 Recommendation API for eCommerce website for clothing.",
      technologies: ['Django', 'MySQL', 'scikit-surprise'],
      repoLink: "https://github.com/HieuVo1/shopica-recommender-system"
    }
  ]

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
