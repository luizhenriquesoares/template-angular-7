import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PromotionsComponent } from './promotions/promotions.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,

  // children: [{
  //   path: 'promotions',
  //   component: PromotionsComponent,
  // }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
