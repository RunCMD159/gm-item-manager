import { Injectable } from '@angular/core';
import {ArrayConfigItem} from './models/groups/array-config-item.model';
import {GroupConfigItem} from './models/groups/group-config-item.model';
import {TextInputConfigItem} from './models/controls/text-input-config-item.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigExtractorService {

  extractConfig(input: any) {
    return Object.keys(input).map(key => {
      const value = input[key];
      if (Array.isArray(value)) {
        const array: any = new ArrayConfigItem(key, this.extractConfig(input[key]));
        return array;
      }
      if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        const group: any = new GroupConfigItem(key, this.extractConfig(input[key]));
        return group;
      }
      return new TextInputConfigItem(key, value);
    });
  }
}
