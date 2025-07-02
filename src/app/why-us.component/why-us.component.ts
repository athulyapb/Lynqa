import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.css'],
})
export class WhyUsComponent implements OnInit {
  fullText = '“Precision. Positioning. Power.”';
  displayedText = '';
  private index = 0;
  private intervalId: any;

  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        if (this.index < this.fullText.length) {
          this.displayedText += this.fullText.charAt(this.index);
          this.index++;
        } else {
          clearInterval(this.intervalId);
        }
      }, 100);
    });
  }
}
