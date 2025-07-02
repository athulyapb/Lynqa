import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingProfileComponent } from './marketing-profile-component';

describe('MarketingProfileComponent', () => {
  let component: MarketingProfileComponent;
  let fixture: ComponentFixture<MarketingProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarketingProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
