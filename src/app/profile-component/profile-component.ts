import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-component',
  imports: [CommonModule],
  templateUrl: './profile-component.html',
  styleUrl: './profile-component.css',
})
export class ProfileComponent {
  user = {
    name: 'Rithuik Rajeev',
    title: 'Full Stack Developer',
    intro: 'Crafting clean, efficient and scalable software solutions.',
    imageUrl: 'assets/profile.png',
    bio: 'Passionate about Angular, C#, Kubernetes, and DevOps. Based in Germany. I build scalable systems and beautiful web apps.',
    skills: [
      'Angular',
      'C#',
      'Kubernetes',
      'Azure',
      'Docker',
      'TypeScript',
      'HTML',
      'SCSS',
    ],
    projects: [
      {
        name: 'Microfrontend Dashboard',
        description:
          'Modular dashboard using Angular + Module Federation + Auth.',
        link: 'https://github.com/rithuik/microfrontend-dashboard',
      },
      {
        name: 'Cloud Cost Tracker',
        description:
          'Azure-native app to track and optimize cloud costs in real time.',
        link: 'https://github.com/rithuik/cloud-cost-tracker',
      },
    ],
    contact: {
      email: 'rithuik@example.com',
      phone: '+49 123 456 789',
      location: 'Erlangen, Germany',
    },
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/rithuik-rajeev-06567795',
      github: 'https://github.com/rithuik',
      X: 'https://x.com/rithuik',
    },
  };
}
