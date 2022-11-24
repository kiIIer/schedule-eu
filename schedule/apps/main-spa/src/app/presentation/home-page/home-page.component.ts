import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'schedule-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomePageComponent implements OnInit {
  @Input() isHandset: boolean | null = null;
  constructor() {}

  ngOnInit(): void {}
}
