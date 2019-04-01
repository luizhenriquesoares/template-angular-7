import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { PromotionsComponent } from './promotions.component';

const COMPONENTS = [
  PromotionsComponent
];

@NgModule({
  imports: [
    CommonModule,

    ThemeModule.forRoot(),
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class PromotionsModule { }
