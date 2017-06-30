import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SettingsService } from './settings.service';
import { NameListService } from './name-list/name-list.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    SettingsService,
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [SettingsService],
      multi: true
    }
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}

export function initFactory(settings: SettingsService) {
  return () => settings.init();
}
