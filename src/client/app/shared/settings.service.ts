import { Injectable } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Injectable()
export class SettingsService {

  constructor(
    private translate: TranslateService
  ) {
    this.init();
  }

  init() {
    console.log('init configuration');
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');
  }
}
