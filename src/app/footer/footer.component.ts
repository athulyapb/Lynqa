import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [RouterModule],
})
export class FooterComponent {
  constructor(private router: Router) {}

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

  navigateToOtherPage(page: string) {
    this.router.navigate([`/${page}`]).then(() => {
      // Delay to let the view stabilize before scrolling
      setTimeout(() => {
        const element = document.getElementById(page);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }
}
