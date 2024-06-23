import {Route, Routes} from '@angular/router';
import {AppConfig} from "./app.config.type";
import {ConfiguratorComponent} from "./configurator/configurator.component";

export function createRoutesFromConfig(appConfig: AppConfig): Routes {
  if (!appConfig) {
    return [];
  }
  const keys = Object.keys(appConfig)
  return keys.map(key => {
    const path = `form/${key}`;
    console.log(path)
    return ({
      path: path,
      loadComponent: () => import('./item-form/item-form.component')
        .then(c => c.ItemFormComponent),
      data: {
        configuration: appConfig[key]
      }
    } as Route)
  })
}

export const routes: Routes = [{
  path: '',
  component: ConfiguratorComponent
}];
