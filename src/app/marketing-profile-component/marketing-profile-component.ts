import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TermsComponent } from '../terms-component/terms.component';
import { CommonModule } from '@angular/common';
import { WhyUsComponent } from '../why-us.component/why-us.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-marketing-profile-component',
  imports: [
    MatIconModule,
    TermsComponent,
    CommonModule,
    WhyUsComponent,
    RouterModule,
    FooterComponent,
  ],
  templateUrl: './marketing-profile-component.html',
  styleUrl: './marketing-profile-component.css',
})
export class MarketingProfileComponent implements AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  user = {
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/rithuik-rajeev-06567795',
      github: 'https://github.com/rithuik',
      X: 'https://x.com/rithuik',
    },
  };

  termsVisible = false;
  scrolledDown = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolledDown = window.scrollY > 10;
  }
  privacyVisible = false;

  showTerms() {
    this.termsVisible = true;
    this.privacyVisible = false;
  }

  hideTerms() {
    this.termsVisible = false;
  }

  showPrivacy() {
    this.privacyVisible = true;
    this.termsVisible = false;
  }

  hidePrivacy() {
    this.privacyVisible = false;
  }

  navigateToSection(fragment: string) {
    this.router.navigate(['/'], { fragment }).then(() => {
      // Delay to let the view stabilize before scrolling
      setTimeout(() => {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }
}
