import { Pipe, PipeTransform } from '@angular/core';
import {ConfigItem} from '../../models/config-item.interface';
import {GroupConfigItem} from '../../models/groups/group-config-item.model';

@Pipe({
  name: 'isGroup',
  standalone: true
})
export class IsGroupPipe implements PipeTransform {

  transform(configItem: ConfigItem): boolean {
    return configItem instanceof GroupConfigItem;
  }

}
