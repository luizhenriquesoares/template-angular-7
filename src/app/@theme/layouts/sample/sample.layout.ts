import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-layout',
  styleUrls: ['./sample.layout.scss'],
  template: `
    <app-header></app-header>
  `,
})
export class SampleLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
