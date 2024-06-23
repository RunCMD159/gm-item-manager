import {Component} from '@angular/core';
import {FileLoaderComponent} from "./file-loader/file-loader.component";

@Component({
  selector: 'app-configurator',
  standalone: true,
  imports: [
    FileLoaderComponent
  ],
  templateUrl: './configurator.component.html',
  styleUrl: './configurator.component.scss'
})
export class ConfiguratorComponent {

  whenContentLoaded(content: string) {
    const x = JSON.parse(content);
    console.log('json', x);
    Object.keys(x).map(key => {
      return ({key: key, type: 'input', value: x[key]})
    })
  }
}
