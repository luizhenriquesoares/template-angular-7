import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,

    ThemeModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule { }
