import { Routes } from '@angular/router';
import { TermsComponent } from './terms-component/terms.component';
import { PrivacyComponent } from './privacy.component/privacy.component';
import { MarketingProfileComponent } from './marketing-profile-component/marketing-profile-component';

export const routes: Routes = [
  {
    path: '',
    component: MarketingProfileComponent,
  },
  {
    path: 'terms',
    component: TermsComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
];
