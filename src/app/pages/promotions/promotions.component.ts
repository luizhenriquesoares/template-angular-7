import { Component, OnInit } from '@angular/core';

@Component({
  template: `<router-outlet></router-outlet>`,
  selector: 'app-promotions',
  styleUrls: ['./promotions.component.scss'],
  // templateUrl: './promotions.component.html',
})
export class PromotionsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('promotions pages');
  }

}
