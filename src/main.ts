import {bootstrapApplication} from '@angular/platform-browser';
import {createApplicationConfig} from './app/app.config';
import {AppComponent} from './app/app.component';

fetch('assets/app.configuration.json').then(response => {
    return response.json()
}).then(appConfigJson => {
  bootstrapApplication(AppComponent, createApplicationConfig(appConfigJson))
    .catch((err) => console.error(err));
}).catch(err =>{
  alert('Invalid app.configuration.json')
  throw new Error(err)
})
