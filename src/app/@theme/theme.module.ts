import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  HeaderComponent,
  SibebarComponent
} from './components';

import { SampleLayoutComponent } from './layouts';

const COMPONENTS = [
  HeaderComponent,
  SibebarComponent,
  SampleLayoutComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS],
  declarations: [
    ...COMPONENTS
  ],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ThemeModule
    } as ModuleWithProviders;
  }
}
