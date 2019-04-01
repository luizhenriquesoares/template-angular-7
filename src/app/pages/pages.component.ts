import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  // styleUrls: ['pages.component.scss']
  template: `
    <app-sample-layout>
      <router-outlet></router-outlet>
    </app-sample-layout>
  `,
})
export class PagesComponent {
  constructor() {}
}
