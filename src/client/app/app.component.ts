import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'app-bicce',
  template: `<div style="height:100%">
                  <router-outlet></router-outlet>
               </div>`
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
