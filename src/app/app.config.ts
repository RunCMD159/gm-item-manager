import {ApplicationConfig, InjectionToken} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';

export const APP_CONFIG = new InjectionToken('config');

export function createApplicationConfig(appConfig: any) {
  return {
    providers: [{provide: APP_CONFIG, useValue: appConfig},
      provideRouter(routes),
      provideHttpClient(),
      provideAnimations()]
  } as ApplicationConfig
}
