import {ApplicationConfig, InjectionToken} from '@angular/core';
import {provideRouter} from '@angular/router';

import {createRoutesFromConfig, routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";

export const APP_CONFIG = new InjectionToken('config');

export function createApplicationConfig(appConfig: any) {
  return {
    providers: [{provide: APP_CONFIG, useValue: appConfig},
      provideRouter(routes),
      provideHttpClient()]
  } as ApplicationConfig
}
