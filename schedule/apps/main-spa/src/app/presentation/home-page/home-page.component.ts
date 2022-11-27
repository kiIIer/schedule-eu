import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'schedule-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomePageComponent {
  @Input() isHandset: boolean | null = null;

  test() {
    console.log(this.isHandset);
  }
}
