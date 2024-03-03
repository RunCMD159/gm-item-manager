import {inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "./app.config";

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig:any = inject(APP_CONFIG);
  constructor() {
  }

  get routes():string[]{
    return Object.keys(this.appConfig);
  }
}
