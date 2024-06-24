import {Component} from '@angular/core';
import {FileLoaderComponent} from './file-loader/file-loader.component';
import {TextInputConfigItem} from './models/controls/text-input-config-item.model';
import {ArrayConfigItem} from './models/groups/array-config-item.model';
import {GroupConfigItem} from './models/groups/group-config-item.model';

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
    const input = JSON.parse(content);
    const result = this.extractConfig(input);
    const test = {};
    result.forEach(x => Object.assign(test, x.toOutput()));
    console.log(test);
  }

  private extractConfig(input: any) {
    return Object.keys(input).map(key => {
      const value = input[key];
      if (Array.isArray(value)) {
        const children: any = this.extractConfig(input[key]);
        const array: any = new ArrayConfigItem(key, children);
        return array;
      }
      if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        const children = this.extractConfig(input[key]);
        const group: any = new GroupConfigItem(key, children);
        return group;
      }
      return new TextInputConfigItem(key, value);
    });
  }
}
